const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  accountNumber: {
    type: String,
    required: true,
    unique: true
  },
  type: {
    type: String,
    enum: ['savings', 'checking', 'investment'],
    required: true
  },
  balance: {
    type: Number,
    default: 0,
    min: 0
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'frozen', 'pending'],
    default: 'pending'
  },
  currency: {
    type: String,
    default: 'USD'
  }
}, {
  timestamps: true
});

// Generar número de cuenta único
accountSchema.pre('save', async function(next) {
  if (this.isNew) {
    const count = await mongoose.model('Account').countDocuments();
    this.accountNumber = `${new Date().getFullYear()}${String(count + 1).padStart(8, '0')}`;
  }
  next();
});

module.exports = mongoose.model('Account', accountSchema); 