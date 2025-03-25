import mongoose from 'mongoose';
import { connectDB } from '../config/mysql.js';
import User from '../models/UserModel.js';
import OldUser from '../models/User.js';
import dotenv from 'dotenv';

dotenv.config();

async function migrateUsers() {
  try {
    // Conectar a MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');

    // Conectar a MySQL
    await connectDB();

    // Obtener todos los usuarios de MongoDB
    const oldUsers = await OldUser.find({});
    console.log(`Found ${oldUsers.length} users to migrate`);

    // Migrar cada usuario
    for (const oldUser of oldUsers) {
      await User.create({
        documentNumber: oldUser.documentNumber,
        email: oldUser.email,
        password: oldUser.password, // La contraseña ya está hasheada
        firstName: oldUser.firstName,
        lastName: oldUser.lastName,
        role: oldUser.role,
        isActive: oldUser.isActive,
        lastLogin: oldUser.lastLogin
      });
      console.log(`Migrated user: ${oldUser.email}`);
    }

    console.log('Migration completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

migrateUsers();