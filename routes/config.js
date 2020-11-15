const express = require('express');

const { getConfig } = require('../helpers/localState');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json(getConfig());
  next();
});

module.exports = router;
