import { INTEGER, Model, STRING } from 'sequelize';
import db from '.';

class Team extends Model {
  id!: number;
  teamName!: string;
}

Team.init({
  id: {
    type: INTEGER,
    allowNull: true,
    primaryKey: true,
    autoIncrement: true,
  },
  teamName: {
    type: STRING,
    allowNull: true,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'teams',
  tableName: 'teams',
  timestamps: false,
});

export default Team;
