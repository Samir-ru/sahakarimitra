import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

interface ContributionAttributes {
  id: number;
  memberId: number;
  amount: number;
  monthYear: string;
  mode: string;
  receiptUrl?: string;
  createdAt?: Date;
}

interface ContributionCreationAttributes extends Optional<ContributionAttributes, 'id'> {}

class Contribution extends Model<ContributionAttributes, ContributionCreationAttributes> implements ContributionAttributes {
  public id!: number;
  public memberId!: number;
  public amount!: number;
  public monthYear!: string;
  public mode!: string;
  public receiptUrl?: string;
  public createdAt!: Date;

  public static initialize() {
    Contribution.init(
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
        amount: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        monthYear: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        mode: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        receiptUrl: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: new Date(),
        },
      },
      {
        sequelize,
        tableName: 'contributions',
      }
    );
  }
}

export { Contribution, ContributionAttributes };