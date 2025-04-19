import {Sequelize} from 'sequelize';
import { createUserModel } from '../model/userSchema.js';
// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('postgres', 'postgres', process.env.POSTGRESQL_PASSWORD, {
    host: 'localhost',
    dialect:  'postgres'
    /*one of 'mysql'|'sqlite'| 'mariadb'| 'mssql'| 'db2'| 'snowflake'| 'oracle' */
  });

  let UserModel=null

  const connection =async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        UserModel=await createUserModel(sequelize);
        await sequelize.sync();
        console.log("Database Sync success.")
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }

export {
  connection,
  UserModel
}