import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    port: process.env.MYSQL_PORT || 3306,
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('MySQL Connected successfully.');
    
    // Sincronizar modelos con la base de datos
    await sequelize.sync({ alter: true });
    console.log('Database & tables synced');
    
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default sequelize;