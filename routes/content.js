const express = require('express');

const { readFile, writeFile } = require('../utils/fileHandler');

const router = express.Router();

const CONTENT_FILE_PATH = 'content.json';

router.get('/', (req, res, next) => {
  readFile(CONTENT_FILE_PATH)
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
  writeFile(CONTENT_FILE_PATH, req.body)
    .then(() => {
      res
        .status(200)
        .json({ success: `Successfully updated ${CONTENT_FILE_PATH}` });
    })
    .catch(({ message }) => {
      res.status(500).json({ error: message });
    });
  next();
});

module.exports = router;
