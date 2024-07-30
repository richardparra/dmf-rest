import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: {
      dbName: process.env.DATABASE_DBNAME,
      port: parseInt(process.env.DATABASE_PORT, 10),
      password: process.env.DATABASE_PASSWORD,
      user: process.env.DATABASE_USER,
      host: process.env.DATABASE_HOST,
    },
    postgresUrl: process.env.DATABASE_URL,
    postgres: {
      dbName: process.env.POSTGRES_DBNAME,
      port: parseInt(process.env.POSTGRES_PORT, 10),
      password: process.env.POSTGRES_PASSWORD,
      user: process.env.POSTGRES_USER,
      host: process.env.POSTGRES_HOST,
    },
    mysql: {
      dbName: process.env.MYSQL_DBNAME,
      port: parseInt(process.env.MYSQL_PORT, 10),
      password: process.env.MYSQL_PASSWORD,
      user: process.env.MYSQL_USER,
      host: process.env.MYSQL_HOST,
    },
    mariadb: {
      dbName: process.env.MARIADB_DBNAME,
      port: parseInt(process.env.MARIADB_PORT, 10),
      password: process.env.MARIADB_PASSWORD,
      user: process.env.MARIADB_USER,
      host: process.env.MARIADB_HOST,
    },
    apikey: process.env.API_KEY,
    jwtSecret: process.env.JWT_SECRET,
    recaptcha: {
      url: process.env.RECAPTCHA_URL,
      secret: process.env.RECAPTCHA_SECRET,
    },
  };
});
