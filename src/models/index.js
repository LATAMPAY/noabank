import mongoose from 'mongoose';

// Schema para Usuarios
const userSchema = new mongoose.Schema({
  documentNumber: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, enum: ['client', 'admin'], default: 'client' },
  phone: String,
  address: String,
  status: { type: String, enum: ['active', 'inactive', 'blocked'], default: 'active' },
  lastLogin: Date,
  createdAt: { type: Date, default: Date.now, immutable: true },
  updatedAt: Date
});

// Schema para Cuentas
const accountSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  accountNumber: { type: String, required: true, unique: true },
  type: { type: String, enum: ['savings', 'checking', 'investment'], required: true },
  currency: { type: String, required: true },
  balance: { type: Number, default: 0 },
  status: { type: String, enum: ['active', 'inactive', 'blocked'], default: 'active' },
  interestRate: { type: Number, default: 0 },
  lastInterestCalculation: Date,
  createdAt: { type: Date, default: Date.now, immutable: true },
  updatedAt: Date
});

// Schema para Transacciones
const transactionSchema = new mongoose.Schema({
  fromAccount: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true },
  toAccount: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true },
  type: { type: String, enum: ['transfer', 'payment', 'deposit', 'withdrawal'], required: true },
  amount: { type: Number, required: true },
  currency: { type: String, required: true },
  status: { type: String, enum: ['pending', 'completed', 'failed', 'reversed'], default: 'pending' },
  description: String,
  reference: String,
  createdAt: { type: Date, default: Date.now, immutable: true },
  completedAt: Date
});

// Schema para Solicitudes de Crédito
const creditRequestSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  currency: { type: String, required: true },
  term: { type: Number, required: true }, // en meses
  purpose: String,
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  interestRate: Number,
  monthlyPayment: Number,
  documents: [{ type: String }], // URLs de documentos
  createdAt: { type: Date, default: Date.now, immutable: true },
  updatedAt: Date,
  approvedAt: Date,
  approvedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

// Schema para Inversiones
const investmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  accountId: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true },
  type: { type: String, enum: ['fixed_term', 'mutual_fund', 'bonds'], required: true },
  amount: { type: Number, required: true },
  currency: { type: String, required: true },
  term: Number, // en días
  interestRate: Number,
  status: { type: String, enum: ['active', 'completed', 'cancelled'], default: 'active' },
  startDate: { type: Date, required: true },
  endDate: Date,
  expectedReturn: Number,
  actualReturn: Number,
  createdAt: { type: Date, default: Date.now, immutable: true },
  updatedAt: Date
});

// Schema para Códigos QR
const qrCodeSchema = new mongoose.Schema({
  merchantId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['static', 'dynamic'], required: true },
  amount: Number, // null para QR estático
  currency: String,
  description: String,
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  expiresAt: Date, // null para QR estático
  createdAt: { type: Date, default: Date.now, immutable: true },
  updatedAt: Date
});

// Schema para Tarjetas Virtuales
const virtualCardSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  accountId: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true },
  cardNumber: { type: String, required: true, unique: true },
  expirationDate: { type: Date, required: true },
  cvv: { type: String, required: true },
  status: { type: String, enum: ['active', 'inactive', 'blocked'], default: 'active' },
  type: { type: String, enum: ['debit', 'credit'], required: true },
  limit: Number, // para tarjetas de crédito
  usedLimit: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now, immutable: true },
  updatedAt: Date
});

// Middleware para actualizar updatedAt
const updateTimestamp = function(next) {
  this.updatedAt = new Date();
  next();
};

// Aplicar middleware a todos los schemas
[userSchema, accountSchema, creditRequestSchema, investmentSchema, qrCodeSchema, virtualCardSchema].forEach(schema => {
  schema.pre('save', updateTimestamp);
});

// Crear modelos
const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account', accountSchema);
const Transaction = mongoose.model('Transaction', transactionSchema);
const CreditRequest = mongoose.model('CreditRequest', creditRequestSchema);
const Investment = mongoose.model('Investment', investmentSchema);
const QRCode = mongoose.model('QRCode', qrCodeSchema);
const VirtualCard = mongoose.model('VirtualCard', virtualCardSchema);

export {
  User,
  Account,
  Transaction,
  CreditRequest,
  Investment,
  QRCode,
  VirtualCard
};