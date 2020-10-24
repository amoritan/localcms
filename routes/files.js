const express = require('express');
const fs = require('fs');

const router = express.Router();

router.get('/config', (req, res, next) => {
  fs.readFile(
    `${process.cwd()}/.localcms.json`,
    'utf8',
    (fileError, fileData) => {
      if (fileError) {
        res
          .status(404)
          .json({ error: `Configuration file not found on ${fileError.path}` });
        return console.error(fileError);
      }

      try {
        const configPreferences = JSON.parse(fileData);
        res.json(configPreferences);
      } catch (parseError) {
        res
          .status(400)
          .json({ error: 'Configuration file has a syntax error.' });
        return console.error(fileData);
      }

      return console.log('Configuration file loaded successfully!', fileData);
    }
  );
  next();
});

module.exports = router;
