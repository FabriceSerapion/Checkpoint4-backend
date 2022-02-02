require('dotenv').config();

const DEV = {
  PORT: 3001,
  HOSTNAME: 'localhost',
  HOSTS: ['http://localhost:3000'],
};

const PROD = {
  PORT: 3001,
  HOSTNAME: 'localhost',
  HOSTS: ['https://api.nomdedomaine.fr', 'https://api.nomdedomaine.fr'],
};

const getEnv = () => {
  switch (process.env.NODE_ENV) {
    case 'DEV':
      return DEV;
      break;
    case 'PROD':
      return PROD;
      break;
    default:
      return 'error or other settings';
      break;
  }
};

const ENV = getEnv();
module.exports = ENV;
