export const __dev__ = process.env.NODE_ENV === 'development';
export const __prod__ = process.env.NODE_ENV === 'production';

export const APP_NAME = 'Motion';
export const APP_VERSION = '1.0.0';
export const APP_URL = __dev__
  ? 'http://localhost:3000'
  : 'https://motion.karimwael.com';
