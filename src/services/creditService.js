import { CreditRequest, Account, Transaction } from '../models';

class CreditService {
  static async requestCredit(userId, creditData) {
    try {
      const account = await Account.findOne({ userId, type: 'checking' });
      if (!account) {
        throw new Error('Cuenta corriente no encontrada');
      }

      // Crear solicitud de crédito
      const creditRequest = await CreditRequest.create({
        ...creditData,
        userId,
        status: 'pending',
        interestRate: this.calculateInterestRate(creditData.amount, creditData.term),
        monthlyPayment: this.calculateMonthlyPayment(
          creditData.amount,
          this.calculateInterestRate(creditData.amount, creditData.term),
          creditData.term
        )
      });

      return creditRequest;
    } catch (error) {
      throw error;
    }
  }

  static async approveCreditRequest(creditRequestId, adminId) {
    try {
      const creditRequest = await CreditRequest.findById(creditRequestId);
      if (!creditRequest) {
        throw new Error('Solicitud de crédito no encontrada');
      }

      if (creditRequest.status !== 'pending') {
        throw new Error('La solicitud ya ha sido procesada');
      }

      // Obtener cuenta del cliente
      const account = await Account.findOne({
        userId: creditRequest.userId,
        type: 'checking'
      });
      if (!account) {
        throw new Error('Cuenta del cliente no encontrada');
      }

      // Actualizar solicitud
      creditRequest.status = 'approved';
      creditRequest.approvedAt = new Date();
      creditRequest.approvedBy = adminId;
      await creditRequest.save();

      // Acreditar fondos
      account.balance += creditRequest.amount;
      await account.save();

      // Registrar transacción
      await Transaction.create({
        toAccount: account._id,
        fromAccount: account._id,
        type: 'deposit',
        amount: creditRequest.amount,
        currency: creditRequest.currency,
        status: 'completed',
        description: 'Crédito aprobado',
        completedAt: new Date()
      });

      return creditRequest;
    } catch (error) {
      throw error;
    }
  }

  static async rejectCreditRequest(creditRequestId, adminId, reason) {
    try {
      const creditRequest = await CreditRequest.findById(creditRequestId);
      if (!creditRequest) {
        throw new Error('Solicitud de crédito no encontrada');
      }

      if (creditRequest.status !== 'pending') {
        throw new Error('La solicitud ya ha sido procesada');
      }

      // Actualizar solicitud
      creditRequest.status = 'rejected';
      creditRequest.rejectionReason = reason;
      creditRequest.rejectedAt = new Date();
      creditRequest.rejectedBy = adminId;
      await creditRequest.save();

      return creditRequest;
    } catch (error) {
      throw error;
    }
  }

  static async getCreditRequests(filters = {}) {
    try {
      const query = {};

      if (filters.userId) {
        query.userId = filters.userId;
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

      const creditRequests = await CreditRequest.find(query)
        .populate('userId', 'name email')
        .populate('approvedBy', 'name')
        .sort({ createdAt: -1 });

      return creditRequests;
    } catch (error) {
      throw error;
    }
  }

  static calculateInterestRate(amount, term) {
    // Calcular tasa de interés basada en monto y plazo
    // Este es un ejemplo simple, en producción se usarían más factores
    const baseRate = 0.15; // 15% anual base
    const amountFactor = Math.max(0, 0.05 - (amount / 1000000) * 0.01); // Reducción por monto
    const termFactor = Math.min(0.05, (term / 12) * 0.01); // Aumento por plazo

    return baseRate + amountFactor + termFactor;
  }

  static calculateMonthlyPayment(amount, annualRate, termMonths) {
    const monthlyRate = annualRate / 12;
    const payment =
      (amount * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) /
      (Math.pow(1 + monthlyRate, termMonths) - 1);

    return Math.round(payment * 100) / 100;
  }

  static async getCreditHistory(userId) {
    try {
      const creditHistory = await CreditRequest.find({ userId })
        .sort({ createdAt: -1 })
        .populate('approvedBy', 'name');

      return creditHistory;
    } catch (error) {
      throw error;
    }
  }

  static async updateCreditDocuments(creditRequestId, documents) {
    try {
      const creditRequest = await CreditRequest.findById(creditRequestId);
      if (!creditRequest) {
        throw new Error('Solicitud de crédito no encontrada');
      }

      if (creditRequest.status !== 'pending') {
        throw new Error('No se pueden actualizar documentos de una solicitud procesada');
      }

      creditRequest.documents = documents;
      await creditRequest.save();

      return creditRequest;
    } catch (error) {
      throw error;
    }
  }
}

export default CreditService;