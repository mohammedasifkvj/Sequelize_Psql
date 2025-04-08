import {Sequelize} from 'sequelize';
// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('postgres', 'postgres', 'MOASKV', {
    host: 'localhost',
    dialect:  'postgres'/*one of 'mysql' |  | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

  const connection =async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }

export {connection}