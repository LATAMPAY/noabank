import { describe, it, expect, beforeEach, jest } from '@jest/globals';
import { authController } from '../../controllers/authController';
import { AuthService } from '../../services/authService';

// Mock del servicio de autenticación
jest.mock('../../services/authService');

describe('AuthController', () => {
  let req;
  let res;

  beforeEach(() => {
    // Limpiar todos los mocks
    jest.clearAllMocks();

    // Mock de req y res
    req = {
      body: {},
      params: {}
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
  });

  describe('register', () => {
    const mockUserData = {
      email: 'test@example.com',
      password: 'password123',
      documentNumber: '12345678'
    };

    it('debería registrar un usuario exitosamente', async () => {
      const mockResult = {
        user: { ...mockUserData, _id: 'userId' },
        token: 'token'
      };
      AuthService.register.mockResolvedValue(mockResult);
      req.body = mockUserData;

      await authController.register(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: 'Usuario registrado exitosamente',
        data: mockResult
      });
    });

    it('debería manejar errores durante el registro', async () => {
      const errorMessage = 'El usuario ya existe';
      AuthService.register.mockRejectedValue(new Error(errorMessage));
      req.body = mockUserData;

      await authController.register(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: errorMessage
      });
    });
  });

  describe('login', () => {
    const mockCredentials = {
      email: 'test@example.com',
      password: 'password123'
    };

    it('debería autenticar un usuario exitosamente', async () => {
      const mockResult = {
        user: { ...mockCredentials, _id: 'userId' },
        token: 'token'
      };
      AuthService.login.mockResolvedValue(mockResult);
      req.body = mockCredentials;

      await authController.login(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: 'Inicio de sesión exitoso',
        data: mockResult
      });
    });

    it('debería manejar errores de autenticación', async () => {
      const errorMessage = 'Credenciales inválidas';
      AuthService.login.mockRejectedValue(new Error(errorMessage));
      req.body = mockCredentials;

      await authController.login(req, res);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: errorMessage
      });
    });
  });

  describe('verifyAccount', () => {
    const mockToken = 'validToken';
    const mockUserId = 'userId';

    it('debería verificar una cuenta exitosamente', async () => {
      const mockResult = { id: mockUserId };
      AuthService.verifyToken.mockResolvedValue(mockResult);
      AuthService.updateUserStatus.mockResolvedValue(true);
      req.params.token = mockToken;

      await authController.verifyAccount(req, res);

      expect(AuthService.verifyToken).toHaveBeenCalledWith(mockToken);
      expect(AuthService.updateUserStatus).toHaveBeenCalledWith(mockUserId, 'active');
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: 'Cuenta verificada exitosamente',
        data: mockResult
      });
    });

    it('debería manejar errores de verificación', async () => {
      const errorMessage = 'Token inválido';
      AuthService.verifyToken.mockRejectedValue(new Error(errorMessage));
      req.params.token = mockToken;

      await authController.verifyAccount(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: errorMessage
      });
    });
  });

  describe('requestPasswordReset', () => {
    const mockEmail = 'test@example.com';

    it('debería solicitar restablecimiento de contraseña exitosamente', async () => {
      const mockResult = true;
      AuthService.requestPasswordReset.mockResolvedValue(mockResult);
      req.body = { email: mockEmail };

      await authController.requestPasswordReset(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: 'Solicitud de restablecimiento enviada',
        data: mockResult
      });
    });

    it('debería manejar errores en la solicitud', async () => {
      const errorMessage = 'Usuario no encontrado';
      AuthService.requestPasswordReset.mockRejectedValue(new Error(errorMessage));
      req.body = { email: mockEmail };

      await authController.requestPasswordReset(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: errorMessage
      });
    });
  });

  describe('resetPassword', () => {
    const mockToken = 'validToken';
    const mockPassword = 'newPassword123';

    it('debería restablecer la contraseña exitosamente', async () => {
      const mockResult = true;
      AuthService.resetPassword.mockResolvedValue(mockResult);
      req.params.token = mockToken;
      req.body = { password: mockPassword };

      await authController.resetPassword(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: 'Contraseña restablecida exitosamente',
        data: mockResult
      });
    });

    it('debería manejar errores en el restablecimiento', async () => {
      const errorMessage = 'Token inválido';
      AuthService.resetPassword.mockRejectedValue(new Error(errorMessage));
      req.params.token = mockToken;
      req.body = { password: mockPassword };

      await authController.resetPassword(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: errorMessage
      });
    });
  });
});