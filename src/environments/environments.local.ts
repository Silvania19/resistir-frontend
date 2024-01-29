import { generalConfig } from './generalConfig';

const url = {
  protocol: 'http://',
  url: 'localhost:8080',
};

export const environment = {
  url,
  ...generalConfig,
  production: false,
};