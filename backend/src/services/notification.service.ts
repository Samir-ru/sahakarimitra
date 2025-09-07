import { admin } from '../config/firebase';

export class NotificationService {
    static async sendNotification(token: string, message: string) {
        const payload = {
            notification: {
                title: 'Notification',
                body: message,
            },
        };

        try {
            await admin.messaging().sendToDevice(token, payload);
            console.log('Notification sent successfully:', message);
        } catch (error) {
            console.error('Error sending notification:', error);
        }
    }
}