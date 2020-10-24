const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');

const filesRouter = require('./routes/files');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/files', filesRouter);

if (process.env.NODE_ENV === 'development') {
  app.use(
    '*',
    createProxyMiddleware({
      target: 'http://localhost:3000',
      changeOrigin: true,
    })
  );
} else {
  app.use(express.static(path.join(__dirname, './packages/webapp/build')));
}

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json({ error: err });
  next();
});

module.exports = app;
