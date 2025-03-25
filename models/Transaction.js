const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['transfer', 'deposit', 'withdrawal'],
    required: true
  },
  amount: {
    type: Number,
    required: true,
    min: 0
  },
  fromAccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account'
  },
  toAccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account'
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed', 'flagged'],
    default: 'pending'
  },
  description: {
    type: String,
    trim: true
  },
  reference: {
    type: String,
    unique: true
  },
  risk: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'low'
  }
}, {
  timestamps: true
});

// Generar referencia única
transactionSchema.pre('save', async function(next) {
  if (this.isNew) {
    const date = new Date();
    const count = await mongoose.model('Transaction').countDocuments();
    this.reference = `TX${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(count + 1).padStart(6, '0')}`;
  }
  next();
});

// Calcular nivel de riesgo
transactionSchema.pre('save', function(next) {
  if (this.amount >= 10000) {
    this.risk = 'high';
  } else if (this.amount >= 5000) {
    this.risk = 'medium';
  }
  next();
});

module.exports = mongoose.model('Transaction', transactionSchema); 