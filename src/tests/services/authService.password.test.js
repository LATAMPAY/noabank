import { describe, it, expect, beforeEach, jest } from '@jest/globals';
import { AuthService } from '../../services/authService';
import { User } from '../../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Mock de las dependencias
jest.mock('../../models/User');
jest.mock('bcrypt');
jest.mock('jsonwebtoken');

describe('AuthService - Password Management', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('changePassword', () => {
    const mockUserId = 'userId';
    const mockOldPassword = 'oldPassword123';
    const mockNewPassword = 'newPassword123';

    it('debería cambiar la contraseña exitosamente', async () => {
      const mockUser = {
        _id: mockUserId,
        password: 'hashedOldPassword',
        save: jest.fn()
      };

      User.findById.mockResolvedValue(mockUser);
      bcrypt.compare.mockResolvedValue(true);
      bcrypt.genSalt.mockResolvedValue('salt');
      bcrypt.hash.mockResolvedValue('hashedNewPassword');

      const result = await AuthService.changePassword(
        mockUserId,
        mockOldPassword,
        mockNewPassword
      );

      expect(result).toBe(true);
      expect(mockUser.password).toBe('hashedNewPassword');
      expect(mockUser.save).toHaveBeenCalled();
    });

    it('debería lanzar error si el usuario no existe', async () => {
      User.findById.mockResolvedValue(null);

      await expect(AuthService.changePassword(
        mockUserId,
        mockOldPassword,
        mockNewPassword
      ))
        .rejects
        .toThrow('Usuario no encontrado');
    });

    it('debería lanzar error si la contraseña actual es incorrecta', async () => {
      const mockUser = {
        _id: mockUserId,
        password: 'hashedOldPassword'
      };

      User.findById.mockResolvedValue(mockUser);
      bcrypt.compare.mockResolvedValue(false);

      await expect(AuthService.changePassword(
        mockUserId,
        mockOldPassword,
        mockNewPassword
      ))
        .rejects
        .toThrow('Contraseña actual incorrecta');
    });
  });

  describe('resetPassword', () => {
    const mockEmail = 'test@example.com';

    it('debería generar token de restablecimiento exitosamente', async () => {
      const mockUser = {
        _id: 'userId',
        email: mockEmail
      };

      User.findOne.mockResolvedValue(mockUser);
      jwt.sign.mockReturnValue('resetToken');

      const result = await AuthService.resetPassword(mockEmail);

      expect(result).toBe(true);
      expect(jwt.sign).toHaveBeenCalledWith(
        { id: mockUser._id },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
    });

    it('debería lanzar error si el usuario no existe', async () => {
      User.findOne.mockResolvedValue(null);

      await expect(AuthService.resetPassword(mockEmail))
        .rejects
        .toThrow('Usuario no encontrado');
    });
  });

  describe('verifyResetToken', () => {
    const mockToken = 'validResetToken';

    it('debería verificar token de restablecimiento exitosamente', async () => {
      const mockDecodedToken = { id: 'userId' };
      const mockUser = {
        _id: 'userId'
      };

      jwt.verify.mockReturnValue(mockDecodedToken);
      User.findById.mockResolvedValue(mockUser);

      const result = await AuthService.verifyResetToken(mockToken);

      expect(result).toBe(true);
    });

    it('debería lanzar error si el token es inválido', async () => {
      jwt.verify.mockImplementation(() => {
        throw new Error('Token inválido');
      });

      await expect(AuthService.verifyResetToken(mockToken))
        .rejects
        .toThrow('Token inválido');
    });

    it('debería lanzar error si el usuario no existe', async () => {
      const mockDecodedToken = { id: 'userId' };
      jwt.verify.mockReturnValue(mockDecodedToken);
      User.findById.mockResolvedValue(null);

      await expect(AuthService.verifyResetToken(mockToken))
        .rejects
        .toThrow('Token inválido');
    });
  });

  describe('setNewPassword', () => {
    const mockToken = 'validResetToken';
    const mockNewPassword = 'newPassword123';

    it('debería establecer nueva contraseña exitosamente', async () => {
      const mockDecodedToken = { id: 'userId' };
      const mockUser = {
        _id: 'userId',
        save: jest.fn()
      };

      jwt.verify.mockReturnValue(mockDecodedToken);
      User.findById.mockResolvedValue(mockUser);
      bcrypt.genSalt.mockResolvedValue('salt');
      bcrypt.hash.mockResolvedValue('hashedNewPassword');

      const result = await AuthService.setNewPassword(mockToken, mockNewPassword);

      expect(result).toBe(true);
      expect(mockUser.password).toBe('hashedNewPassword');
      expect(mockUser.save).toHaveBeenCalled();
    });

    it('debería lanzar error si el token es inválido', async () => {
      jwt.verify.mockImplementation(() => {
        throw new Error('Token inválido');
      });

      await expect(AuthService.setNewPassword(mockToken, mockNewPassword))
        .rejects
        .toThrow('Token inválido');
    });

    it('debería lanzar error si el usuario no existe', async () => {
      const mockDecodedToken = { id: 'userId' };
      jwt.verify.mockReturnValue(mockDecodedToken);
      User.findById.mockResolvedValue(null);

      await expect(AuthService.setNewPassword(mockToken, mockNewPassword))
        .rejects
        .toThrow('Token inválido');
    });
  });
});
