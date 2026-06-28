const { pool, query } = require('../db');

const riskFor = (amount) => {
  if (amount >= 10000) return 'high';
  if (amount >= 5000) return 'medium';
  return 'low';
};

const generateReference = async (client) => {
  const date = new Date();
  const { rows } = await client.query('SELECT COUNT(*)::int AS count FROM transactions');
  const next = rows[0].count + 1;
  return `TX${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(
    next
  ).padStart(6, '0')}`;
};

const mapTransaction = (t) => ({
  id: t.id,
  type: t.type,
  amount: Number(t.amount),
  fromAccount: t.from_account,
  toAccount: t.to_account,
  status: t.status,
  description: t.description,
  reference: t.reference,
  risk: t.risk,
  date: t.created_at,
  createdAt: t.created_at,
});

exports.createTransfer = async (req, res) => {
  // Accept the various field names the frontend may use.
  const fromAccountId = req.body.fromAccountId || req.body.sourceAccountId;
  const toAccountId = req.body.toAccountId || req.body.destinationAccountId;
  const amount = Number(req.body.amount);
  const description = req.body.description || '';

  if (!fromAccountId || !toAccountId || !amount || amount <= 0) {
    return res.status(400).json({
      success: false,
      message: 'Datos de transferencia inválidos',
    });
  }

  if (Number(fromAccountId) === Number(toAccountId)) {
    return res.status(400).json({
      success: false,
      message: 'La cuenta origen y destino no pueden ser la misma',
    });
  }

  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    // Lock the source account (owned by the user) and the destination account.
    const fromRes = await client.query(
      `SELECT * FROM accounts WHERE id = $1 AND user_id = $2 AND status = 'active' FOR UPDATE`,
      [fromAccountId, req.user.id]
    );
    const fromAccount = fromRes.rows[0];
    if (!fromAccount) {
      await client.query('ROLLBACK');
      return res.status(404).json({
        success: false,
        message: 'Cuenta origen no encontrada o inactiva',
      });
    }

    const toRes = await client.query('SELECT * FROM accounts WHERE id = $1 FOR UPDATE', [
      toAccountId,
    ]);
    const toAccount = toRes.rows[0];
    if (!toAccount) {
      await client.query('ROLLBACK');
      return res.status(404).json({
        success: false,
        message: 'Cuenta destino no encontrada',
      });
    }

    if (Number(fromAccount.balance) < amount) {
      await client.query('ROLLBACK');
      return res.status(400).json({
        success: false,
        message: 'Fondos insuficientes',
      });
    }

    const reference = await generateReference(client);
    const txRes = await client.query(
      `INSERT INTO transactions (type, amount, from_account, to_account, description, status, reference, risk)
       VALUES ('transfer', $1, $2, $3, $4, 'completed', $5, $6)
       RETURNING *`,
      [amount, fromAccountId, toAccountId, description, reference, riskFor(amount)]
    );

    await client.query('UPDATE accounts SET balance = balance - $1 WHERE id = $2', [
      amount,
      fromAccountId,
    ]);
    await client.query('UPDATE accounts SET balance = balance + $1 WHERE id = $2', [
      amount,
      toAccountId,
    ]);

    await client.query('COMMIT');
    res.status(201).json({ success: true, transaction: mapTransaction(txRes.rows[0]) });
  } catch (error) {
    await client.query('ROLLBACK');
    res.status(500).json({
      success: false,
      message: 'Error al realizar la transferencia',
      error: error.message,
    });
  } finally {
    client.release();
  }
};

exports.getTransactions = async (req, res) => {
  try {
    const { type, status } = req.query;
    const conditions = [];
    const params = [];

    if (type) {
      params.push(type);
      conditions.push(`t.type = $${params.length}`);
    }
    if (status) {
      params.push(status);
      conditions.push(`t.status = $${params.length}`);
    }

    const where = conditions.length ? `WHERE ${conditions.join(' AND ')}` : '';

    const { rows } = await query(
      `SELECT t.*,
              fa.account_number AS from_account_number,
              ta.account_number AS to_account_number,
              fu.name AS from_user_name,
              tu.name AS to_user_name
       FROM transactions t
       LEFT JOIN accounts fa ON fa.id = t.from_account
       LEFT JOIN accounts ta ON ta.id = t.to_account
       LEFT JOIN users fu ON fu.id = fa.user_id
       LEFT JOIN users tu ON tu.id = ta.user_id
       ${where}
       ORDER BY t.created_at DESC`,
      params
    );

    const transactions = rows.map((t) => ({
      ...mapTransaction(t),
      fromAccountNumber: t.from_account_number,
      toAccountNumber: t.to_account_number,
      user: t.from_user_name || t.to_user_name,
    }));

    res.json({ success: true, transactions });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener las transacciones',
      error: error.message,
    });
  }
};

exports.updateTransactionStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const { rows } = await query(
      'UPDATE transactions SET status = $1 WHERE id = $2 RETURNING *',
      [status, req.params.id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Transacción no encontrada' });
    }

    res.json({ success: true, transaction: mapTransaction(rows[0]) });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al actualizar el estado de la transacción',
      error: error.message,
    });
  }
};
