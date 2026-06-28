const jwt = require('jsonwebtoken');
const { query } = require('../db');

const JWT_SECRET = process.env.JWT_SECRET || 'noa-bank-dev-secret';

exports.protect = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'No autorizado para acceder a esta ruta',
      });
    }

    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      const { rows } = await query(
        'SELECT id, name, email, role, status FROM users WHERE id = $1',
        [decoded.id]
      );

      if (rows.length === 0) {
        return res.status(401).json({
          success: false,
          message: 'No autorizado para acceder a esta ruta',
        });
      }

      req.user = rows[0];
      next();
    } catch (err) {
      return res.status(401).json({
        success: false,
        message: 'No autorizado para acceder a esta ruta',
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error en la autenticación',
      error: error.message,
    });
  }
};

exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: 'No tiene permiso para realizar esta acción',
      });
    }
    next();
  };
};
