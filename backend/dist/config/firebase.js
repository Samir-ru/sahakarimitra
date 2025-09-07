"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
Sure, here;
's the proposed content for the file `/sahakarimitra/sahakarimitra/backend/src/config/firebase.ts`:;
const app_1 = require("firebase-admin/app");
const auth_1 = require("firebase-admin/auth");
const firebaseConfig = {
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://<YOUR_PROJECT_ID>.firebaseio.com',
};
const app = (0, app_1.initializeApp)(firebaseConfig);
exports.auth = (0, auth_1.getAuth)(app);
