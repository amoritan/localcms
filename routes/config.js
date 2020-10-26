const express = require('express');

const { readFile } = require('../utils/fileHandler');

const router = express.Router();

router.get('/', (req, res, next) => {
  readFile('.localcms.json')
    .then((configPreferences) => {
      res.json(configPreferences);
    })
    .catch(({ name, message }) => {
      switch (name) {
        case 'ReferenceError':
          res.status(404).json({ error: message });
          break;
        case 'SyntaxError':
          res.status(400).json({ error: message });
          break;
        default:
          res.status(500).json({ error: message });
      }
    });
  next();
});

module.exports = router;
