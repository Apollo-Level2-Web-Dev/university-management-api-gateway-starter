import { createClient } from 'redis';
import config from '../config';
import logger from './logger';

let redisClient = createClient({
  url: config.redis.url
});

redisClient.on('error', (err) => logger.error('RedisError', err));
redisClient.on('connect', (err) => logger.info('Redis connected'));

const connect = async (): Promise<void> => {
  await redisClient.connect();
};

const get = async (key: string): Promise<string | null> => {
  return await redisClient.get(key);
};

const disconnect = async (): Promise<void> => {
  await redisClient.quit();
};

const getAccessToken = async (userId: string): Promise<string | null> => {
  const key = `access-token:${userId}`;
  return await redisClient.get(key);
};

export const RedisClient = {
  connect,
  get,
  disconnect,
  getAccessToken
};
