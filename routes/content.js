const express = require('express');

const { getConfig, getContent, setContent } = require('../helpers/localState');
const { writeFile } = require('../utils/fileHandler');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json(getContent());
  next();
});

router.post('/', (req, res, next) => {
  const { contentFile } = getConfig();
  writeFile(contentFile, req.body)
    .then(() => {
      setContent(req.body);
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
