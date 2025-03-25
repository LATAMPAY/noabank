import { Account, Transaction, User } from '../models';

class AccountService {
  static async createAccount(userId, accountData) {
    try {
      const user = await User.findById(userId);
      if (!user) {
        throw new Error('Usuario no encontrado');
      }

      // Generar número de cuenta único
      const accountNumber = await this.generateAccountNumber();

      // Crear nueva cuenta
      const account = await Account.create({
        ...accountData,
        userId,
        accountNumber,
        status: 'active',
        balance: 0,
        lastInterestCalculation: new Date()
      });

      return account;
    } catch (error) {
      throw error;
    }
  }

  static async getAccounts(userId) {
    try {
      const accounts = await Account.find({ userId, status: { $ne: 'blocked' } });
      return accounts;
    } catch (error) {
      throw error;
    }
  }

  static async getAccountBalance(accountId) {
    try {
      const account = await Account.findById(accountId);
      if (!account) {
        throw new Error('Cuenta no encontrada');
      }
      return account.balance;
    } catch (error) {
      throw error;
    }
  }

  static async transfer(fromAccountId, toAccountId, amount, description = '') {
    try {
      const fromAccount = await Account.findById(fromAccountId);
      const toAccount = await Account.findById(toAccountId);

      if (!fromAccount || !toAccount) {
        throw new Error('Cuenta no encontrada');
      }

      if (fromAccount.status !== 'active' || toAccount.status !== 'active') {
        throw new Error('Una de las cuentas está inactiva o bloqueada');
      }

      if (fromAccount.balance < amount) {
        throw new Error('Fondos insuficientes');
      }

      // Crear transacción
      const transaction = await Transaction.create({
        fromAccount: fromAccountId,
        toAccount: toAccountId,
        amount,
        currency: fromAccount.currency,
        type: 'transfer',
        status: 'pending',
        description
      });

      // Actualizar balances
      fromAccount.balance -= amount;
      toAccount.balance += amount;

      await Promise.all([
        fromAccount.save(),
        toAccount.save(),
        Transaction.findByIdAndUpdate(transaction._id, {
          status: 'completed',
          completedAt: new Date()
        })
      ]);

      return transaction;
    } catch (error) {
      throw error;
    }
  }

  static async calculateInterest(accountId) {
    try {
      const account = await Account.findById(accountId);
      if (!account || account.status !== 'active') {
        throw new Error('Cuenta no encontrada o inactiva');
      }

      const now = new Date();
      const lastCalculation = account.lastInterestCalculation || account.createdAt;
      const daysSinceLastCalculation = Math.floor(
        (now - lastCalculation) / (1000 * 60 * 60 * 24)
      );

      if (daysSinceLastCalculation < 1) {
        return 0;
      }

      // Calcular interés diario
      const dailyRate = account.interestRate / 365;
      const interest = account.balance * dailyRate * daysSinceLastCalculation;

      // Actualizar cuenta
      account.balance += interest;
      account.lastInterestCalculation = now;
      await account.save();

      // Registrar transacción de interés
      await Transaction.create({
        toAccount: accountId,
        fromAccount: accountId,
        amount: interest,
        currency: account.currency,
        type: 'deposit',
        status: 'completed',
        description: 'Interés acreditado',
        completedAt: now
      });

      return interest;
    } catch (error) {
      throw error;
    }
  }

  static async generateAccountNumber() {
    // Generar número de cuenta único de 10 dígitos
    const prefix = '10';
    const randomDigits = Math.floor(Math.random() * 100000000)
      .toString()
      .padStart(8, '0');
    const accountNumber = prefix + randomDigits;

    // Verificar si ya existe
    const existingAccount = await Account.findOne({ accountNumber });
    if (existingAccount) {
      return this.generateAccountNumber();
    }

    return accountNumber;
  }

  static async updateAccountStatus(accountId, status) {
    try {
      const account = await Account.findByIdAndUpdate(
        accountId,
        { status },
        { new: true }
      );

      if (!account) {
        throw new Error('Cuenta no encontrada');
      }

      return account;
    } catch (error) {
      throw error;
    }
  }

  static async getTransactionHistory(accountId, filters = {}) {
    try {
      const query = {
        $or: [
          { fromAccount: accountId },
          { toAccount: accountId }
        ]
      };

      if (filters.startDate) {
        query.createdAt = { $gte: new Date(filters.startDate) };
      }

      if (filters.endDate) {
        query.createdAt = { ...query.createdAt, $lte: new Date(filters.endDate) };
      }

      if (filters.type) {
        query.type = filters.type;
      }

      if (filters.status) {
        query.status = filters.status;
      }

      const transactions = await Transaction.find(query)
        .sort({ createdAt: -1 })
        .populate('fromAccount', 'accountNumber')
        .populate('toAccount', 'accountNumber');

      return transactions;
    } catch (error) {
      throw error;
    }
  }
}

export default AccountService;