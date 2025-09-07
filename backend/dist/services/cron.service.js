"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_cron_1 = __importDefault(require("node-cron"));
const notification_service_1 = require("./notification.service");
// Schedule a cron job to run daily at 9 AM
node_cron_1.default.schedule('0 9 * * *', () => {
    console.log('Running daily reminder task...');
    (0, notification_service_1.sendReminder)();
});
// Additional scheduled tasks can be added here
