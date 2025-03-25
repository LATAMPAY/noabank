import { QRCode, Account, Transaction } from '../models';

class QRService {
  static async createStaticQR(merchantId, description) {
    try {
      const merchant = await Account.findOne({ userId: merchantId, type: 'checking' });
      if (!merchant) {
        throw new Error('Cuenta comercial no encontrada');
      }

      const qrCode = await QRCode.create({
        merchantId,
        type: 'static',
        description,
        status: 'active'
      });

      return qrCode;
    } catch (error) {
      throw error;
    }
  }

  static async createDynamicQR(merchantId, amount, currency, description) {
    try {
      const merchant = await Account.findOne({ userId: merchantId, type: 'checking' });
      if (!merchant) {
        throw new Error('Cuenta comercial no encontrada');
      }

      // Establecer fecha de vencimiento (24 horas)
      const expiresAt = new Date();
      expiresAt.setHours(expiresAt.getHours() + 24);

      const qrCode = await QRCode.create({
        merchantId,
        type: 'dynamic',
        amount,
        currency,
        description,
        status: 'active',
        expiresAt
      });

      return qrCode;
    } catch (error) {
      throw error;
    }
  }

  static async processQRPayment(qrId, payerAccountId) {
    try {
      const qrCode = await QRCode.findById(qrId);
      if (!qrCode) {
        throw new Error('Código QR no encontrado');
      }

      if (qrCode.status !== 'active') {
        throw new Error('Código QR inactivo');
      }

      if (qrCode.type === 'dynamic' && new Date() > qrCode.expiresAt) {
        throw new Error('Código QR expirado');
      }

      const payerAccount = await Account.findById(payerAccountId);
      if (!payerAccount) {
        throw new Error('Cuenta del pagador no encontrada');
      }

      const merchantAccount = await Account.findOne({
        userId: qrCode.merchantId,
        type: 'checking'
      });
      if (!merchantAccount) {
        throw new Error('Cuenta del comercio no encontrada');
      }

      // Verificar fondos suficientes
      if (qrCode.type === 'dynamic') {
        if (payerAccount.balance < qrCode.amount) {
          throw new Error('Fondos insuficientes');
        }
      }

      // Procesar el pago
      const amount = qrCode.type === 'dynamic' ? qrCode.amount : 0;
      if (amount > 0) {
        payerAccount.balance -= amount;
        merchantAccount.balance += amount;

        await Promise.all([
          payerAccount.save(),
          merchantAccount.save()
        ]);

        // Registrar transacción
        await Transaction.create({
          fromAccount: payerAccountId,
          toAccount: merchantAccount._id,
          type: 'payment',
          amount,
          currency: qrCode.currency,
          status: 'completed',
          description: `Pago QR - ${qrCode.description}`,
          completedAt: new Date()
        });
      }

      // Actualizar estado del QR si es dinámico
      if (qrCode.type === 'dynamic') {
        qrCode.status = 'inactive';
        await qrCode.save();
      }

      return {
        success: true,
        amount,
        merchantName: merchantAccount.name,
        transactionDate: new Date()
      };
    } catch (error) {
      throw error;
    }
  }

  static async getQRsByMerchant(merchantId, filters = {}) {
    try {
      const query = { merchantId };

      if (filters.type) {
        query.type = filters.type;
      }

      if (filters.status) {
        query.status = filters.status;
      }

      if (filters.startDate) {
        query.createdAt = { $gte: new Date(filters.startDate) };
      }

      if (filters.endDate) {
        query.createdAt = { ...query.createdAt, $lte: new Date(filters.endDate) };
      }

      const qrCodes = await QRCode.find(query)
        .sort({ createdAt: -1 });

      return qrCodes;
    } catch (error) {
      throw error;
    }
  }

  static async updateQRStatus(qrId, status) {
    try {
      const qrCode = await QRCode.findByIdAndUpdate(
        qrId,
        { status },
        { new: true }
      );

      if (!qrCode) {
        throw new Error('Código QR no encontrado');
      }

      return qrCode;
    } catch (error) {
      throw error;
    }
  }
}

export default QRService;