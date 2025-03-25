import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  documentNumber: { 
    type: String, 
    required: [true, 'El número de documento es requerido'],
    unique: true,
    trim: true
  },
  email: { 
    type: String, 
    required: [true, 'El email es requerido'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Por favor ingrese un email válido']
  },
  password: { 
    type: String, 
    required: [true, 'La contraseña es requerida'],
    minlength: [8, 'La contraseña debe tener al menos 8 caracteres']
  },
  name: { 
    type: String, 
    required: [true, 'El nombre es requerido'],
    trim: true
  },
  role: { 
    type: String, 
    enum: ['client', 'admin'],
    default: 'client'
  },
  phone: {
    type: String,
    trim: true
  },
  address: {
    type: String,
    trim: true
  },
  status: { 
    type: String, 
    enum: ['pending', 'active', 'inactive', 'blocked'],
    default: 'pending'
  },
  verificationToken: String,
  verificationExpires: Date,
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  lastLogin: Date,
  failedLoginAttempts: {
    type: Number,
    default: 0
  },
  createdAt: { 
    type: Date, 
    default: Date.now,
    immutable: true 
  },
  updatedAt: Date
});

// Middleware para hashear la contraseña antes de guardar
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    this.updatedAt = new Date();
    next();
  } catch (error) {
    next(error);
  }
});

// Método para comparar contraseñas
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Método para incrementar intentos fallidos de login
userSchema.methods.incrementLoginAttempts = async function() {
  this.failedLoginAttempts += 1;
  if (this.failedLoginAttempts >= 5) {
    this.status = 'blocked';
  }
  return this.save();
};

// Método para resetear intentos fallidos de login
userSchema.methods.resetLoginAttempts = async function() {
  this.failedLoginAttempts = 0;
  return this.save();
};

export const User = mongoose.model('User', userSchema);