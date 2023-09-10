import fs from 'fs';
import morgan from 'morgan';
import path from 'path';
import * as rfs from 'rotating-file-stream';

const logFormat =
  ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] - :response-time ms';

const successLogDirectory = path.join(process.cwd(), 'logs', 'morgan', 'success');
const successLogStream = rfs.createStream('success.log', {
  interval: '1d',
  path: successLogDirectory,
  size: '10M',
  compress: 'gzip'
});
fs.mkdirSync(successLogDirectory, { recursive: true });

const errorLogDirectory = path.join(process.cwd(), 'logs', 'morgan', 'error');
const errorLogStream = rfs.createStream('error.log', {
  interval: '1d',
  path: errorLogDirectory,
  size: '10M',
  compress: 'gzip'
});
fs.mkdirSync(errorLogDirectory, { recursive: true });

const morganSuccessLogHandler = morgan(logFormat, {
  stream: successLogStream,
  skip: (req, res) => res.statusCode >= 400
});

const morganErrorLogHandler = morgan(logFormat, {
  stream: errorLogStream,
  skip: (req, res) => res.statusCode < 400
});

export default {
  morganSuccessLogHandler,
  morganErrorLogHandler
};
