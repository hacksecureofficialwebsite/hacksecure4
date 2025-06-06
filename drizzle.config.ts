import { config } from 'dotenv';

config({ path: '.env' });

export default {
  schema: './src/db/schema.ts',
  out: './migrations',
  dialect: 'turso',
  dbCredentials: {
    url: process.env.TURSO_CONNECTION_URL ?? '',
    authToken: process.env.TURSO_AUTH_TOKEN ?? '',
  },
};
