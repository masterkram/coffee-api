require('dotenv').config();

module.exports = {
  name: 'default',
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: 3306,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  logging: true,
  entities: ['dist/**/*.entity{ .ts,.js}'],
};