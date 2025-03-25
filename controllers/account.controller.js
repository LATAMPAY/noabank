const Account = require('../models/Account');
const Transaction = require('../models/Transaction');

exports.createAccount = async (req, res) => {
  try {
    const { type, currency } = req.body;
    const account = await Account.create({
      user: req.user.id,
      type,
      currency
    });

    res.status(201).json({
      success: true,
      account
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al crear la cuenta',
      error: error.message
    });
  }
};

exports.getAccounts = async (req, res) => {
  try {
    const accounts = await Account.find({ user: req.user.id });
    res.json({
      success: true,
      accounts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener las cuentas',
      error: error.message
    });
  }
};

exports.getAccountById = async (req, res) => {
  try {
    const account = await Account.findOne({
      _id: req.params.id,
      user: req.user.id
    });

    if (!account) {
      return res.status(404).json({
        success: false,
        message: 'Cuenta no encontrada'
      });
    }

    res.json({
      success: true,
      account
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener la cuenta',
      error: error.message
    });
  }
};

exports.getAccountTransactions = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    const query = {
      $or: [
        { fromAccount: req.params.id },
        { toAccount: req.params.id }
      ]
    };

    if (startDate && endDate) {
      query.createdAt = {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      };
    }

    const transactions = await Transaction.find(query)
      .sort({ createdAt: -1 })
      .populate('fromAccount toAccount', 'accountNumber type');

    res.json({
      success: true,
      transactions
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener las transacciones',
      error: error.message
    });
  }
};

exports.updateAccountStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const account = await Account.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!account) {
      return res.status(404).json({
        success: false,
        message: 'Cuenta no encontrada'
      });
    }

    res.json({
      success: true,
      account
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al actualizar el estado de la cuenta',
      error: error.message
    });
  }
}; 