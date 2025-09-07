import cron from 'node-cron';
import { sendReminder } from './notification.service';

// Schedule a cron job to run daily at 9 AM
cron.schedule('0 9 * * *', () => {
    console.log('Running daily reminder task...');
    sendReminder();
});

// Additional scheduled tasks can be added here