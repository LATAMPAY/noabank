import { describe, it, expect, beforeEach, jest } from '@jest/globals';
import { AuthService } from '../../services/authService';
import { User } from '../../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Mock de las dependencias
jest.mock('../../models/User');
jest.mock('bcrypt');
jest.mock('jsonwebtoken');

describe('AuthService', () => {
  beforeEach(() => {
    // Limpiar todos los mocks antes de cada prueba
    jest.clearAllMocks();
  });

  describe('register', () => {
    const mockUserData = {
      email: 'test@example.com',
      password: 'password123',
      documentNumber: '12345678'
    };

    it('debería registrar un nuevo usuario exitosamente', async () => {
      // Mock de las respuestas
      User.findOne.mockResolvedValue(null);
      bcrypt.genSalt.mockResolvedValue('salt');
      bcrypt.hash.mockResolvedValue('hashedPassword');
      User.create.mockResolvedValue({
        ...mockUserData,
        _id: 'userId',
        password: 'hashedPassword',
        toObject: () => ({
          ...mockUserData,
          _id: 'userId',
          password: 'hashedPassword'
        })
      });
      jwt.sign.mockReturnValue('token');

      const result = await AuthService.register(mockUserData);

      expect(result).toHaveProperty('user');
      expect(result).toHaveProperty('token');
      expect(result.user.password).toBeUndefined();
    });

    it('debería lanzar error si el usuario ya existe', async () => {
      User.findOne.mockResolvedValue({ email: mockUserData.email });

      await expect(AuthService.register(mockUserData))
        .rejects
        .toThrow('El usuario ya existe');
    });
  });

  describe('login', () => {
    const mockCredentials = {
      email: 'test@example.com',
      password: 'password123'
    };

    it('debería autenticar un usuario exitosamente', async () => {
      const mockUser = {
        ...mockCredentials,
        _id: 'userId',
        status: 'active',
        save: jest.fn(),
        toObject: () => ({
          ...mockCredentials,
          _id: 'userId',
          status: 'active'
        })
      };

      User.findOne.mockResolvedValue(mockUser);
      bcrypt.compare.mockResolvedValue(true);
      jwt.sign.mockReturnValue('token');

      const result = await AuthService.login(
        mockCredentials.email,
        mockCredentials.password
      );

      expect(result).toHaveProperty('user');
      expect(result).toHaveProperty('token');
      expect(mockUser.save).toHaveBeenCalled();
    });

    it('debería lanzar error si las credenciales son inválidas', async () => {
      User.findOne.mockResolvedValue(null);

      await expect(AuthService.login(
        mockCredentials.email,
        mockCredentials.password
      ))
        .rejects
        .toThrow('Credenciales inválidas');
    });

    it('debería lanzar error si la cuenta está inactiva', async () => {
      const mockUser = {
        ...mockCredentials,
        status: 'inactive',
        password: 'hashedPassword'
      };

      User.findOne.mockResolvedValue(mockUser);
      bcrypt.compare.mockResolvedValue(true);

      await expect(AuthService.login(
        mockCredentials.email,
        mockCredentials.password
      ))
        .rejects
        .toThrow('Cuenta inactiva o bloqueada');
    });
  });

  describe('validateToken', () => {
    it('debería validar un token exitosamente', async () => {
      const mockDecodedToken = { id: 'userId' };
      const mockUser = {
        _id: 'userId',
        status: 'active',
        toObject: () => ({ _id: 'userId', status: 'active' })
      };

      jwt.verify.mockReturnValue(mockDecodedToken);
      User.findById.mockResolvedValue(mockUser);

      const result = await AuthService.validateToken('validToken');

      expect(result).toEqual(expect.objectContaining({
        _id: 'userId',
        status: 'active'
      }));
    });

    it('debería lanzar error si el token es inválido', async () => {
      jwt.verify.mockImplementation(() => {
        throw new Error('Token inválido');
      });

      await expect(AuthService.validateToken('invalidToken'))
        .rejects
        .toThrow('Token inválido');
    });
  });
});