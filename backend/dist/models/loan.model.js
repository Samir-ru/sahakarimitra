"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loan = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Loan extends sequelize_1.Model {
}
exports.Loan = Loan;
Loan.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    memberId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    groupId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    principal: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    interestRate: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    minInstallment: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    dueDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: database_1.sequelize,
    tableName: 'loans',
    timestamps: true,
});
