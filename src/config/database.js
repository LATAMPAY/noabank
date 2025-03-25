import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);

    // Configuración automática de índices
    await createIndices();

    // Configuración automática de validaciones
    await setupValidations();

  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const createIndices = async () => {
  const models = mongoose.modelNames();
  for (const modelName of models) {
    const model = mongoose.model(modelName);
    
    // Índices para búsqueda eficiente
    if (modelName === 'User') {
      await model.collection.createIndex({ email: 1 }, { unique: true });
      await model.collection.createIndex({ documentNumber: 1 }, { unique: true });
    }
    
    if (modelName === 'Account') {
      await model.collection.createIndex({ accountNumber: 1 }, { unique: true });
      await model.collection.createIndex({ userId: 1 });
      await model.collection.createIndex({ currency: 1 });
    }
    
    if (modelName === 'Transaction') {
      await model.collection.createIndex({ fromAccount: 1 });
      await model.collection.createIndex({ toAccount: 1 });
      await model.collection.createIndex({ createdAt: 1 });
      await model.collection.createIndex({ status: 1 });
    }

    if (modelName === 'CreditRequest') {
      await model.collection.createIndex({ userId: 1 });
      await model.collection.createIndex({ status: 1 });
      await model.collection.createIndex({ createdAt: 1 });
    }

    if (modelName === 'Investment') {
      await model.collection.createIndex({ userId: 1 });
      await model.collection.createIndex({ type: 1 });
      await model.collection.createIndex({ status: 1 });
    }

    if (modelName === 'QRCode') {
      await model.collection.createIndex({ merchantId: 1 });
      await model.collection.createIndex({ status: 1 });
    }
  }
};

const setupValidations = async () => {
  // Validaciones personalizadas para cada modelo
  mongoose.plugin(schema => {
    schema.pre('save', function(next) {
      // Validación general antes de guardar cualquier documento
      if (this.isModified('createdAt')) {
        const err = new Error('No se permite modificar la fecha de creación');
        next(err);
      }
      next();
    });
  });
};

export default connectDB;