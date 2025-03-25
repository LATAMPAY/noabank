const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const User = require('../models/User');
const Account = require('../models/Account');
const Transaction = require('../models/Transaction');

const seedDatabase = async () => {
  try {
    // Conectar a MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Conectado a MongoDB');

    // Limpiar base de datos
    await User.deleteMany();
    await Account.deleteMany();
    await Transaction.deleteMany();

    // Crear usuario administrador
    const adminPassword = await bcrypt.hash('admin123', 10);
    const admin = await User.create({
      name: 'Administrador',
      email: 'admin@noa-bank.com',
      password: adminPassword,
      role: 'admin',
      status: 'active'
    });

    // Crear usuario cliente
    const clientPassword = await bcrypt.hash('client123', 10);
    const client = await User.create({
      name: 'Cliente Demo',
      email: 'cliente@ejemplo.com',
      password: clientPassword,
      role: 'client',
      status: 'active'
    });

    // Crear cuentas para el cliente
    const savingsAccount = await Account.create({
      user: client._id,
      type: 'savings',
      balance: 5000,
      status: 'active',
      currency: 'USD'
    });

    const checkingAccount = await Account.create({
      user: client._id,
      type: 'checking',
      balance: 2500,
      status: 'active',
      currency: 'USD'
    });

    // Crear algunas transacciones
    await Transaction.create({
      type: 'deposit',
      amount: 5000,
      toAccount: savingsAccount._id,
      status: 'completed',
      description: 'Depósito inicial'
    });

    await Transaction.create({
      type: 'deposit',
      amount: 2500,
      toAccount: checkingAccount._id,
      status: 'completed',
      description: 'Depósito inicial'
    });

    await Transaction.create({
      type: 'transfer',
      amount: 1000,
      fromAccount: savingsAccount._id,
      toAccount: checkingAccount._id,
      status: 'completed',
      description: 'Transferencia de prueba'
    });

    console.log('Base de datos inicializada con éxito');
    process.exit(0);
  } catch (error) {
    console.error('Error al inicializar la base de datos:', error);
    process.exit(1);
  }
};

seedDatabase(); 