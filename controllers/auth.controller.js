const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { query } = require('../db');

const JWT_SECRET = process.env.JWT_SECRET || 'noa-bank-dev-secret';

const signToken = (user) =>
  jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '24h' });

const publicUser = (u) => ({
  id: u.id,
  name: u.name,
  email: u.email,
  role: u.role,
  status: u.status,
});

exports.register = async (req, res) => {
  try {
    const { firstName, lastName, password } = req.body;
    const email = (req.body.email || '').toLowerCase().trim();
    // The frontend may send `name` or split first/last name fields.
    const name =
      req.body.name ||
      [firstName, lastName].filter(Boolean).join(' ').trim();

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Nombre, email y contraseña son requeridos',
      });
    }

    const existing = await query('SELECT id FROM users WHERE email = $1', [email]);
    if (existing.rows.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'El email ya está registrado',
      });
    }

    const hashed = await bcrypt.hash(password, 10);
    const { rows } = await query(
      `INSERT INTO users (name, email, password, role, status, last_login)
       VALUES ($1, $2, $3, 'client', 'active', now())
       RETURNING id, name, email, role, status`,
      [name, email, hashed]
    );

    const user = rows[0];
    res.status(201).json({
      success: true,
      token: signToken(user),
      user: publicUser(user),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al registrar usuario',
      error: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const email = (req.body.email || '').toLowerCase().trim();
    const { password } = req.body;

    const { rows } = await query('SELECT * FROM users WHERE email = $1', [email]);
    const user = rows[0];

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Credenciales inválidas',
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Credenciales inválidas',
      });
    }

    await query('UPDATE users SET last_login = now() WHERE id = $1', [user.id]);

    res.json({
      success: true,
      token: signToken(user),
      user: publicUser(user),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al iniciar sesión',
      error: error.message,
    });
  }
};

exports.getMe = async (req, res) => {
  try {
    res.json({
      success: true,
      user: publicUser(req.user),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener información del usuario',
      error: error.message,
    });
  }
};
