import { INTEGER, Model, STRING } from 'sequelize';
import db from '.';

class User extends Model {
  id: number;
  username: string;
  email: string;
  password: string;
  role: string;
}

User.init({
  id: {
    type: INTEGER,
    allowNull: true,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: STRING,
    allowNull: true,
  },
  email: {
    type: STRING,
    allowNull: true,
  },
  password: {
    type: STRING,
    allowNull: true,
  },
  role: {
    type: STRING,
    allowNull: true,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'users',
  tableName: 'users',
  timestamps: false,
});

export default User;
