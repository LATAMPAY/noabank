import { authService } from '../services/authService';

export const authController = {
  // Registro de nuevo usuario
  async register(req, res) {
    try {
      const userData = req.body;
      const result = await authService.register(userData);
      res.status(201).json({
        success: true,
        message: 'Usuario registrado exitosamente',
        data: result
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  },

  // Inicio de sesión
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const result = await authService.login(email, password);
      res.status(200).json({
        success: true,
        message: 'Inicio de sesión exitoso',
        data: result
      });
    } catch (error) {
      res.status(401).json({
        success: false,
        message: error.message
      });
    }
  },

  // Verificación de cuenta
  async verifyAccount(req, res) {
    try {
      const { token } = req.params;
      const result = await authService.verifyToken(token);
      await authService.updateUserStatus(result.id, 'active');
      res.status(200).json({
        success: true,
        message: 'Cuenta verificada exitosamente',
        data: result
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  },

  // Solicitud de restablecimiento de contraseña
  async requestPasswordReset(req, res) {
    try {
      const { email } = req.body;
      const result = await authService.requestPasswordReset(email);
      res.status(200).json({
        success: true,
        message: 'Solicitud de restablecimiento enviada',
        data: result
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  },

  // Restablecimiento de contraseña
  async resetPassword(req, res) {
    try {
      const { token } = req.params;
      const { password } = req.body;
      const result = await authService.resetPassword(token, password);
      res.status(200).json({
        success: true,
        message: 'Contraseña restablecida exitosamente',
        data: result
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }
};