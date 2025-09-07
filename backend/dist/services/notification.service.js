"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
const firebase_1 = require("../config/firebase");
class NotificationService {
    static async sendNotification(token, message) {
        const payload = {
            notification: {
                title: 'Notification',
                body: message,
            },
        };
        try {
            await firebase_1.admin.messaging().sendToDevice(token, payload);
            console.log('Notification sent successfully:', message);
        }
        catch (error) {
            console.error('Error sending notification:', error);
        }
    }
}
exports.NotificationService = NotificationService;
