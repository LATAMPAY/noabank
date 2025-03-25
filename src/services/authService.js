import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models';

class AuthService {
  static async register(userData) {
    try {
      const { email, password, documentNumber } = userData;

      // Verificar si el usuario ya existe
      const existingUser = await User.findOne({
        $or: [{ email }, { documentNumber }]
      });

      if (existingUser) {
        throw new Error('El usuario ya existe');
      }

      // Encriptar contraseña
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Crear nuevo usuario
      const user = await User.create({
        ...userData,
        password: hashedPassword,
        lastLogin: new Date()
      });

      // Generar token
      const token = this.generateToken(user);

      return {
        user: this.sanitizeUser(user),
        token
      };
    } catch (error) {
      throw error;
    }
  }

  static async login(email, password) {
    try {
      // Buscar usuario
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('Credenciales inválidas');
      }

      // Verificar contraseña
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        throw new Error('Credenciales inválidas');
      }

      // Verificar estado de la cuenta
      if (user.status !== 'active') {
        throw new Error('Cuenta inactiva o bloqueada');
      }

      // Actualizar último login
      user.lastLogin = new Date();
      await user.save();

      // Generar token
      const token = this.generateToken(user);

      return {
        user: this.sanitizeUser(user),
        token
      };
    } catch (error) {
      throw error;
    }
  }

  static async validateToken(token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id);

      if (!user || user.status !== 'active') {
        throw new Error('Token inválido');
      }

      return this.sanitizeUser(user);
    } catch (error) {
      throw error;
    }
  }

  static generateToken(user) {
    return jwt.sign(
      {
        id: user._id,
        role: user.role
      },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
  }

  static sanitizeUser(user) {
    const sanitized = user.toObject();
    delete sanitized.password;
    return sanitized;
  }

  static async changePassword(userId, oldPassword, newPassword) {
    try {
      const user = await User.findById(userId);
      if (!user) {
        throw new Error('Usuario no encontrado');
      }

      // Verificar contraseña actual
      const isMatch = await bcrypt.compare(oldPassword, user.password);
      if (!isMatch) {
        throw new Error('Contraseña actual incorrecta');
      }

      // Encriptar nueva contraseña
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);

      // Actualizar contraseña
      user.password = hashedPassword;
      await user.save();

      return true;
    } catch (error) {
      throw error;
    }
  }

  static async resetPassword(email) {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('Usuario no encontrado');
      }

      // Generar token temporal
      const resetToken = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );

      // Aquí se implementaría el envío del email con el token
      // await emailService.sendPasswordReset(email, resetToken);

      return true;
    } catch (error) {
      throw error;
    }
  }

  static async verifyResetToken(token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id);

      if (!user) {
        throw new Error('Token inválido');
      }

      return true;
    } catch (error) {
      throw error;
    }
  }

  static async setNewPassword(token, newPassword) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id);

      if (!user) {
        throw new Error('Token inválido');
      }

      // Encriptar nueva contraseña
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);

      // Actualizar contraseña
      user.password = hashedPassword;
      await user.save();

      return true;
    } catch (error) {
      throw error;
    }
  }
}

export default AuthService;