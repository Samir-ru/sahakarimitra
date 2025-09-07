"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.sequelize = new sequelize_1.Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    logging: false,
    define: {
        timestamps: true,
        underscored: true
    }
});
const connectDB = async () => {
    try {
        await exports.sequelize.authenticate();
        console.log('Database connected successfully');
        await exports.sequelize.sync(); // { force: true } to recreate tables
    }
    catch (error) {
        console.error('Unable to connect to database:', error);
        process.exit(1);
    }
};
exports.connectDB = connectDB;
