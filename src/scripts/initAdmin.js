import bcrypt from 'bcryptjs';
import { User } from '../models';
import { defaultAdminUser } from '../config/adminConfig';

export const initializeAdmin = async () => {
  try {
    // Verificar si ya existe un usuario administrador
    const existingAdmin = await User.findOne({ role: 'admin' });
    if (existingAdmin) {
      console.log('Usuario administrador ya existe');
      return;
    }

    // Encriptar la contraseña del administrador
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(defaultAdminUser.password, salt);

    // Crear el usuario administrador
    const adminUser = await User.create({
      ...defaultAdminUser,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    console.log('Usuario administrador creado exitosamente:', adminUser.email);
  } catch (error) {
    console.error('Error al crear usuario administrador:', error);
    throw error;
  }
};