const { query } = require('../db');

const mapAccount = (a) => ({
  id: a.id,
  userId: a.user_id,
  accountNumber: a.account_number,
  type: a.type,
  balance: Number(a.balance),
  status: a.status,
  currency: a.currency,
  createdAt: a.created_at,
});

const generateAccountNumber = async () => {
  const { rows } = await query('SELECT COUNT(*)::int AS count FROM accounts');
  const next = rows[0].count + 1;
  return `${new Date().getFullYear()}${String(next).padStart(8, '0')}`;
};

exports.createAccount = async (req, res) => {
  try {
    const { type = 'savings', currency = 'USD' } = req.body;
    const accountNumber = await generateAccountNumber();

    const { rows } = await query(
      `INSERT INTO accounts (user_id, account_number, type, currency, status, balance)
       VALUES ($1, $2, $3, $4, 'active', 0)
       RETURNING *`,
      [req.user.id, accountNumber, type, currency]
    );

    res.status(201).json({ success: true, account: mapAccount(rows[0]) });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al crear la cuenta',
      error: error.message,
    });
  }
};

exports.getAccounts = async (req, res) => {
  try {
    const { rows } = await query(
      'SELECT * FROM accounts WHERE user_id = $1 ORDER BY created_at ASC',
      [req.user.id]
    );
    res.json({ success: true, accounts: rows.map(mapAccount) });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener las cuentas',
      error: error.message,
    });
  }
};

exports.getAccountById = async (req, res) => {
  try {
    const { rows } = await query(
      'SELECT * FROM accounts WHERE id = $1 AND user_id = $2',
      [req.params.id, req.user.id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Cuenta no encontrada' });
    }

    res.json({ success: true, account: mapAccount(rows[0]) });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener la cuenta',
      error: error.message,
    });
  }
};

exports.getAccountTransactions = async (req, res) => {
  try {
    const accountId = Number(req.params.id);
    const { rows } = await query(
      `SELECT * FROM transactions
       WHERE from_account = $1 OR to_account = $1
       ORDER BY created_at ASC`,
      [accountId]
    );

    // Build a running balance for this account so statements can show it.
    let running = 0;
    const ledger = rows.map((t) => {
      const amount = Number(t.amount);
      const isCredit = t.to_account === accountId;
      running += isCredit ? amount : -amount;
      return {
        id: t.id,
        date: t.created_at,
        description: t.description,
        type: isCredit ? 'credit' : 'debit',
        amount,
        balance: running,
        reference: t.reference,
        status: t.status,
      };
    });

    // Newest first for display.
    ledger.reverse();

    res.json({ success: true, transactions: ledger });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener las transacciones',
      error: error.message,
    });
  }
};

exports.updateAccountStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const { rows } = await query(
      'UPDATE accounts SET status = $1 WHERE id = $2 RETURNING *',
      [status, req.params.id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Cuenta no encontrada' });
    }

    res.json({ success: true, account: mapAccount(rows[0]) });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al actualizar el estado de la cuenta',
      error: error.message,
    });
  }
};
