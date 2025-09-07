"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
Sure, here;
's the proposed content for the file: /sahakarimitra/sahakarimitra/backend/src/app.ts;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const auth_routes_1 = require("./routes/auth.routes");
const contribution_routes_1 = require("./routes/contribution.routes");
const group_routes_1 = require("./routes/group.routes");
const loan_routes_1 = require("./routes/loan.routes");
const database_1 = require("./config/database");
const firebase_1 = require("./config/firebase");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Middleware
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Database and Firebase initialization
(0, database_1.connectToDatabase)();
(0, firebase_1.initializeFirebase)();
// Routes
app.use('/api/auth', auth_routes_1.authRoutes);
app.use('/api/contributions', contribution_routes_1.contributionRoutes);
app.use('/api/groups', group_routes_1.groupRoutes);
app.use('/api/loans', loan_routes_1.loanRoutes);
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
