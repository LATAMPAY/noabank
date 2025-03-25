const Transaction = require('../models/Transaction');
const Account = require('../models/Account');

exports.createTransfer = async (req, res) => {
  try {
    const { fromAccountId, toAccountId, amount, description } = req.body;

    // Verificar cuentas
    const fromAccount = await Account.findOne({
      _id: fromAccountId,
      user: req.user.id,
      status: 'active'
    });

    if (!fromAccount) {
      return res.status(404).json({
        success: false,
        message: 'Cuenta origen no encontrada o inactiva'
      });
    }

    const toAccount = await Account.findById(toAccountId);
    if (!toAccount) {
      return res.status(404).json({
        success: false,
        message: 'Cuenta destino no encontrada'
      });
    }

    // Verificar fondos suficientes
    if (fromAccount.balance < amount) {
      return res.status(400).json({
        success: false,
        message: 'Fondos insuficientes'
      });
    }

    // Crear transacción
    const transaction = await Transaction.create({
      type: 'transfer',
      amount,
      fromAccount: fromAccountId,
      toAccount: toAccountId,
      description,
      status: 'completed'
    });

    // Actualizar balances
    await Account.findByIdAndUpdate(fromAccountId, {
      $inc: { balance: -amount }
    });

    await Account.findByIdAndUpdate(toAccountId, {
      $inc: { balance: amount }
    });

    res.status(201).json({
      success: true,
      transaction
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al realizar la transferencia',
      error: error.message
    });
  }
};

exports.getTransactions = async (req, res) => {
  try {
    const { startDate, endDate, type, status } = req.query;
    const query = {};

    // Filtrar por fecha
    if (startDate && endDate) {
      query.createdAt = {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      };
    }

    // Filtrar por tipo
    if (type) {
      query.type = type;
    }

    // Filtrar por estado
    if (status) {
      query.status = status;
    }

    const transactions = await Transaction.find(query)
      .sort({ createdAt: -1 })
      .populate('fromAccount toAccount', 'accountNumber type user')
      .populate({
        path: 'fromAccount',
        populate: { path: 'user', select: 'name email' }
      })
      .populate({
        path: 'toAccount',
        populate: { path: 'user', select: 'name email' }
      });

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

exports.updateTransactionStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const transaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!transaction) {
      return res.status(404).json({
        success: false,
        message: 'Transacción no encontrada'
      });
    }

    res.json({
      success: true,
      transaction
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al actualizar el estado de la transacción',
      error: error.message
    });
  }
}; 