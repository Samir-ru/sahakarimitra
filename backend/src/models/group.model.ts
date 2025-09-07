import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

interface GroupAttributes {
  id: number;
  name: string;
  location: string;
  min_monthly_installment: number;
  created_by: string;
  loan_members_only: boolean;
  created_at?: Date;
}

interface GroupCreationAttributes extends Optional<GroupAttributes, 'id' | 'created_at'> {}

class Group extends Model<GroupAttributes, GroupCreationAttributes> implements GroupAttributes {
  public id!: number;
  public name!: string;
  public location!: string;
  public min_monthly_installment!: number;
  public created_by!: string;
  public loan_members_only!: boolean;
  public created_at?: Date;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Group.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    min_monthly_installment: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    loan_members_only: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'groups',
  }
);

export default Group;