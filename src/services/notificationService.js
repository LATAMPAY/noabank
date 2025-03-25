import { User } from '../models';

class NotificationService {
  static async sendTransactionNotification(userId, transactionData) {
    try {
      const user = await User.findById(userId);
      if (!user) {
        throw new Error('Usuario no encontrado');
      }

      // Aquí se implementaría el envío de notificación
      // Ejemplo: email, SMS, push notification
      const notification = {
        type: 'transaction',
        title: 'Nueva Transacción',
        message: `Se ha realizado una ${transactionData.type} por ${transactionData.amount} ${transactionData.currency}`,
        timestamp: new Date(),
        status: 'pending'
      };

      // Enviar notificación según preferencias del usuario
      await this.dispatchNotification(user, notification);

      return notification;
    } catch (error) {
      throw error;
    }
  }

  static async sendCreditStatusNotification(userId, creditData) {
    try {
      const user = await User.findById(userId);
      if (!user) {
        throw new Error('Usuario no encontrado');
      }

      const notification = {
        type: 'credit',
        title: 'Actualización de Crédito',
        message: `Su solicitud de crédito ha sido ${creditData.status}`,
        timestamp: new Date(),
        status: 'pending'
      };

      await this.dispatchNotification(user, notification);

      return notification;
    } catch (error) {
      throw error;
    }
  }

  static async sendInvestmentNotification(userId, investmentData) {
    try {
      const user = await User.findById(userId);
      if (!user) {
        throw new Error('Usuario no encontrado');
      }

      const notification = {
        type: 'investment',
        title: 'Actualización de Inversión',
        message: `Su inversión ${investmentData.type} ha ${investmentData.status === 'completed' ? 'vencido' : 'sido actualizada'}`,
        timestamp: new Date(),
        status: 'pending'
      };

      await this.dispatchNotification(user, notification);

      return notification;
    } catch (error) {
      throw error;
    }
  }

  static async sendSecurityAlert(userId, alertData) {
    try {
      const user = await User.findById(userId);
      if (!user) {
        throw new Error('Usuario no encontrado');
      }

      const notification = {
        type: 'security',
        title: 'Alerta de Seguridad',
        message: alertData.message,
        timestamp: new Date(),
        status: 'urgent'
      };

      // Enviar alerta por todos los canales disponibles
      await this.dispatchNotification(user, notification, true);

      return notification;
    } catch (error) {
      throw error;
    }
  }

  static async sendAccountNotification(userId, accountData) {
    try {
      const user = await User.findById(userId);
      if (!user) {
        throw new Error('Usuario no encontrado');
      }

      const notification = {
        type: 'account',
        title: 'Información de Cuenta',
        message: accountData.message,
        timestamp: new Date(),
        status: 'pending'
      };

      await this.dispatchNotification(user, notification);

      return notification;
    } catch (error) {
      throw error;
    }
  }

  static async dispatchNotification(user, notification, urgent = false) {
    // Implementar lógica de envío según preferencias del usuario
    // y tipo de notificación

    if (urgent) {
      // Enviar por todos los canales disponibles
      await Promise.all([
        this.sendEmail(user.email, notification),
        this.sendSMS(user.phone, notification),
        this.sendPushNotification(user.deviceToken, notification)
      ]);
    } else {
      // Enviar según preferencias del usuario
      if (user.preferences?.emailNotifications) {
        await this.sendEmail(user.email, notification);
      }
      if (user.preferences?.smsNotifications && notification.type === 'security') {
        await this.sendSMS(user.phone, notification);
      }
      if (user.preferences?.pushNotifications) {
        await this.sendPushNotification(user.deviceToken, notification);
      }
    }
  }

  static async sendEmail(email, notification) {
    // Implementar envío de email
    console.log(`Enviando email a ${email}:`, notification);
  }

  static async sendSMS(phone, notification) {
    // Implementar envío de SMS
    console.log(`Enviando SMS a ${phone}:`, notification);
  }

  static async sendPushNotification(deviceToken, notification) {
    // Implementar envío de notificación push
    console.log(`Enviando push notification a ${deviceToken}:`, notification);
  }
}

export default NotificationService;