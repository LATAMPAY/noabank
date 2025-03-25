import { VirtualCard, Account, Transaction } from '../models';

class CardService {
  static async createVirtualCard(userId, accountId, cardType) {
    try {
      const account = await Account.findOne({ _id: accountId, userId });
      if (!account) {
        throw new Error('Cuenta no encontrada');
      }

      // Generar número de tarjeta único
      const cardNumber = await this.generateCardNumber();
      const expirationDate = this.calculateExpirationDate();
      const cvv = this.generateCVV();

      // Crear tarjeta virtual
      const card = await VirtualCard.create({
        userId,
        accountId,
        cardNumber,
        expirationDate,
        cvv,
        type: cardType,
        status: 'active',
        limit: cardType === 'credit' ? this.calculateCreditLimit(account) : null,
        usedLimit: 0
      });

      return this.sanitizeCard(card);
    } catch (error) {
      throw error;
    }
  }

  static async getCards(userId, filters = {}) {
    try {
      const query = { userId };

      if (filters.type) {
        query.type = filters.type;
      }

      if (filters.status) {
        query.status = filters.status;
      }

      const cards = await VirtualCard.find(query)
        .populate('accountId', 'accountNumber currency')
        .sort({ createdAt: -1 });

      return cards.map(card => this.sanitizeCard(card));
    } catch (error) {
      throw error;
    }
  }

  static async processPayment(cardId, amount, merchantInfo) {
    try {
      const card = await VirtualCard.findById(cardId);
      if (!card) {
        throw new Error('Tarjeta no encontrada');
      }

      if (card.status !== 'active') {
        throw new Error('Tarjeta inactiva o bloqueada');
      }

      const account = await Account.findById(card.accountId);
      if (!account) {
        throw new Error('Cuenta no encontrada');
      }

      // Verificar fondos o límite de crédito
      if (card.type === 'debit') {
        if (account.balance < amount) {
          throw new Error('Fondos insuficientes');
        }
      } else {
        const availableCredit = card.limit - card.usedLimit;
        if (availableCredit < amount) {
          throw new Error('Límite de crédito excedido');
        }
      }

      // Procesar el pago
      if (card.type === 'debit') {
        account.balance -= amount;
        await account.save();
      } else {
        card.usedLimit += amount;
        await card.save();
      }

      // Registrar transacción
      const transaction = await Transaction.create({
        fromAccount: card.accountId,
        toAccount: merchantInfo.accountId,
        type: 'payment',
        amount,
        currency: account.currency,
        status: 'completed',
        description: `Pago con tarjeta ${card.type} - ${merchantInfo.name}`,
        reference: this.generateTransactionReference(),
        completedAt: new Date()
      });

      return transaction;
    } catch (error) {
      throw error;
    }
  }

  static async updateCardStatus(cardId, status) {
    try {
      const card = await VirtualCard.findByIdAndUpdate(
        cardId,
        { status },
        { new: true }
      );

      if (!card) {
        throw new Error('Tarjeta no encontrada');
      }

      return this.sanitizeCard(card);
    } catch (error) {
      throw error;
    }
  }

  static async generateCardNumber() {
    // Generar número de tarjeta único de 16 dígitos
    const prefix = '4532'; // Ejemplo de prefijo para tarjetas virtuales
    const randomDigits = Math.floor(Math.random() * 1000000000000)
      .toString()
      .padStart(12, '0');
    const cardNumber = prefix + randomDigits;

    // Verificar si ya existe
    const existingCard = await VirtualCard.findOne({ cardNumber });
    if (existingCard) {
      return this.generateCardNumber();
    }

    return cardNumber;
  }

  static generateCVV() {
    // Generar CVV de 3 dígitos
    return Math.floor(Math.random() * 900 + 100).toString();
  }

  static calculateExpirationDate() {
    // Establecer fecha de vencimiento a 3 años desde la emisión
    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 3);
    return expirationDate;
  }

  static calculateCreditLimit(account) {
    // Lógica para calcular límite de crédito basado en el historial del cliente
    // Este es un ejemplo simple, en producción se usarían más factores
    const baseLimit = 50000;
    const accountAgeInMonths = (
      (new Date() - account.createdAt) /
      (1000 * 60 * 60 * 24 * 30)
    );
    return baseLimit * (1 + Math.min(accountAgeInMonths / 12, 2));
  }

  static generateTransactionReference() {
    // Generar referencia única para la transacción
    return 'TX-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
  }

  static sanitizeCard(card) {
    // Ocultar información sensible de la tarjeta
    const sanitized = card.toObject();
    sanitized.cardNumber = '****' + sanitized.cardNumber.slice(-4);
    delete sanitized.cvv;
    return sanitized;
  }
}

export default CardService;