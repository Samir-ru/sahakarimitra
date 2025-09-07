"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contribution = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Contribution extends sequelize_1.Model {
    static initialize() {
        Contribution.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            memberId: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
            },
            amount: {
                type: sequelize_1.DataTypes.FLOAT,
                allowNull: false,
            },
            monthYear: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            mode: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            receiptUrl: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            createdAt: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false,
                defaultValue: new Date(),
            },
        }, {
            sequelize: database_1.sequelize,
            tableName: 'contributions',
        });
    }
}
exports.Contribution = Contribution;
