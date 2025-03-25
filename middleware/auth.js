const jwt = require('jsonwebtoken');
const User = require('../models/User');

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
        message: 'No autorizado para acceder a esta ruta'
      });
    }

    try {
      // Verificar token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id);
      next();
    } catch (err) {
      return res.status(401).json({
        success: false,
        message: 'No autorizado para acceder a esta ruta'
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error en la autenticación',
      error: error.message
    });
  }
};

exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: 'No tiene permiso para realizar esta acción'
      });
    }
    next();
  };
}; 