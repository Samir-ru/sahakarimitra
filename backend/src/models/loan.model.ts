import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

export class Loan extends Model {
  public id!: number;
  public memberId!: number;
  public groupId!: number;
  public principal!: number;
  public interestRate!: number;
  public minInstallment!: number;
  public dueDate!: Date;
  public status!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Loan.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    memberId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    principal: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    interestRate: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    minInstallment: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'loans',
    timestamps: true,
  }
);