import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

interface UserAttributes {
  uid: string;
  name: string;
  email: string;
  phone: string;
  created_at: Date;
}

class User extends Model<UserAttributes> implements UserAttributes {
  public uid!: string;
  public name!: string;
  public email!: string;
  public phone!: string;
  public created_at!: Date;
}

User.init(
  {
    uid: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  },
  {
    sequelize,
    tableName: 'users',
    timestamps: true,
    underscored: true
  }
);

export default User;