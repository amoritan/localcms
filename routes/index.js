const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('index response');
  next();
});

module.exports = router;
