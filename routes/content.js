const express = require('express');

const { readFile, writeFile } = require('../utils/fileHandler');

const router = express.Router();

router.get('/', (req, res, next) => {
  readFile(req.query.path)
    .then((loadedContent) => {
      res.json(loadedContent);
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

router.post('/', (req, res, next) => {
  writeFile(req.query.path, req.body)
    .then(() => {
      res
        .status(200)
        .json({ success: `Successfully updated ${req.query.path}` });
    })
    .catch(({ message }) => {
      res.status(500).json({ error: message });
    });
  next();
});

module.exports = router;
