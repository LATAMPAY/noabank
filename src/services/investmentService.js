import { Investment, Account, Transaction } from '../models';

class InvestmentService {
  static async createInvestment(userId, accountId, investmentData) {
    try {
      const account = await Account.findOne({ _id: accountId, userId });
      if (!account) {
        throw new Error('Cuenta no encontrada');
      }

      if (account.balance < investmentData.amount) {
        throw new Error('Fondos insuficientes');
      }

      // Calcular retorno esperado
      const expectedReturn = this.calculateExpectedReturn(
        investmentData.amount,
        investmentData.interestRate,
        investmentData.term
      );

      // Crear inversión
      const investment = await Investment.create({
        ...investmentData,
        userId,
        accountId,
        expectedReturn,
        startDate: new Date(),
        endDate: this.calculateEndDate(investmentData.term),
        status: 'active'
      });

      // Actualizar balance de la cuenta
      account.balance -= investmentData.amount;
      await account.save();

      // Registrar transacción
      await Transaction.create({
        fromAccount: accountId,
        toAccount: accountId,
        type: 'withdrawal',
        amount: investmentData.amount,
        currency: account.currency,
        status: 'completed',
        description: `Inversión - ${investmentData.type}`,
        completedAt: new Date()
      });

      return investment;
    } catch (error) {
      throw error;
    }
  }

  static async getInvestments(userId, filters = {}) {
    try {
      const query = { userId };

      if (filters.type) {
        query.type = filters.type;
      }

      if (filters.status) {
        query.status = filters.status;
      }

      const investments = await Investment.find(query)
        .populate('accountId', 'accountNumber currency')
        .sort({ createdAt: -1 });

      return investments;
    } catch (error) {
      throw error;
    }
  }

  static async cancelInvestment(userId, investmentId) {
    try {
      const investment = await Investment.findOne({ _id: investmentId, userId });
      if (!investment) {
        throw new Error('Inversión no encontrada');
      }

      if (investment.status !== 'active') {
        throw new Error('La inversión no está activa');
      }

      // Calcular penalización por cancelación anticipada
      const penalty = this.calculatePenalty(investment);

      // Calcular monto a devolver
      const returnAmount = investment.amount - penalty;

      // Actualizar inversión
      investment.status = 'cancelled';
      investment.actualReturn = -penalty;
      await investment.save();

      // Devolver fondos a la cuenta
      const account = await Account.findById(investment.accountId);
      account.balance += returnAmount;
      await account.save();

      // Registrar transacción
      await Transaction.create({
        fromAccount: investment.accountId,
        toAccount: investment.accountId,
        type: 'deposit',
        amount: returnAmount,
        currency: account.currency,
        status: 'completed',
        description: 'Cancelación de inversión',
        completedAt: new Date()
      });

      return { investment, returnAmount, penalty };
    } catch (error) {
      throw error;
    }
  }

  static async completeInvestment(investmentId) {
    try {
      const investment = await Investment.findById(investmentId);
      if (!investment) {
        throw new Error('Inversión no encontrada');
      }

      if (investment.status !== 'active') {
        throw new Error('La inversión no está activa');
      }

      const now = new Date();
      if (now < investment.endDate) {
        throw new Error('La inversión aún no ha vencido');
      }

      // Calcular retorno real
      const actualReturn = this.calculateActualReturn(investment);

      // Actualizar inversión
      investment.status = 'completed';
      investment.actualReturn = actualReturn;
      await investment.save();

      // Devolver fondos más retorno a la cuenta
      const totalAmount = investment.amount + actualReturn;
      const account = await Account.findById(investment.accountId);
      account.balance += totalAmount;
      await account.save();

      // Registrar transacción
      await Transaction.create({
        fromAccount: investment.accountId,
        toAccount: investment.accountId,
        type: 'deposit',
        amount: totalAmount,
        currency: account.currency,
        status: 'completed',
        description: 'Vencimiento de inversión + rendimiento',
        completedAt: now
      });

      return { investment, totalAmount, actualReturn };
    } catch (error) {
      throw error;
    }
  }

  static calculateExpectedReturn(amount, interestRate, term) {
    // Calcular retorno esperado basado en monto, tasa y plazo
    const annualRate = interestRate / 100;
    const dailyRate = annualRate / 365;
    return amount * dailyRate * term;
  }

  static calculateActualReturn(investment) {
    // Calcular retorno real considerando condiciones de mercado
    const expectedReturn = investment.expectedReturn;
    // Aquí se podría agregar lógica para ajustar el retorno según condiciones reales
    return expectedReturn;
  }

  static calculatePenalty(investment) {
    // Calcular penalización por cancelación anticipada
    const daysRemaining = Math.ceil(
      (investment.endDate - new Date()) / (1000 * 60 * 60 * 24)
    );
    const totalDays = Math.ceil(
      (investment.endDate - investment.startDate) / (1000 * 60 * 60 * 24)
    );
    const penaltyRate = (daysRemaining / totalDays) * 0.1; // 10% máximo de penalización
    return investment.amount * penaltyRate;
  }

  static calculateEndDate(term) {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + term);
    return endDate;
  }
}

export default InvestmentService;