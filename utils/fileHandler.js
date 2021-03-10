const fs = require('fs');
const colors = require('colors/safe');

const { DEFAULT_CONFIG_FILE_PATH } = require('../constants');
const { setConfig, setContent } = require('../helpers/localState');

const readFile = (filePath) =>
  new Promise((resolve, reject) => {
    const fullFilePath = `${process.cwd()}/${filePath}`;
    fs.readFile(fullFilePath, 'utf8', (fileError, fileData) => {
      if (fileError) {
        reject(new ReferenceError(`File not found on ${fullFilePath}`));
      }
      try {
        const parseData = JSON.parse(fileData);
        resolve(parseData);
      } catch (parseError) {
        reject(new SyntaxError(`Wrong syntax on ${fullFilePath}`));
      }
    });
  });

const writeFile = (filePath, fileContent) =>
  new Promise((resolve, reject) => {
    const fullFilePath = `${process.cwd()}/${filePath}`;
    const jsonContent = JSON.stringify(fileContent);
    fs.writeFile(fullFilePath, jsonContent, (fileError) => {
      if (fileError) {
        reject(new Error(`Could not write on ${fullFilePath}`));
      }
      resolve();
    });
  });

/* eslint-disable no-console */
const initFiles = () => {
  readFile(DEFAULT_CONFIG_FILE_PATH)
    .then((configPreferences) => {
      console.info(colors.green('Configuration file loaded successfully!'));
      setConfig(configPreferences);

      readFile(configPreferences.contentFile)
        .then((loadedContent) => {
          console.info(
            colors.green('Previously saved content loaded successfully!')
          );
          setContent(loadedContent);
        })
        .catch((readContentFileError) => {
          if (readContentFileError.name !== 'ReferenceError') {
            console.error(
              colors.red.bold(
                'An error occurred when triying to load the content file'
              ),
              readContentFileError.message
            );
            process.exit(1);
          }
          writeFile(configPreferences.contentFile, {})
            .then(() => {
              console.info(
                colors.green.underline('Content file created successfully!'),
                `File created on ${process.cwd()}/${
                  configPreferences.contentFile
                }`
              );
            })
            .catch((writeContentFileError) => {
              console.error(
                colors.red.bold(
                  'An error occurred when triying to create the content file'
                ),
                writeContentFileError.message
              );
            });
        });
    })
    .catch((readConfigFileError) => {
      console.error(
        colors.red.bold(
          'An error occurred when triying to load the configuration file'
        ),
        readConfigFileError.message
      );
      process.exit(1);
    });
};
/* eslint-enable no-console */

module.exports = { readFile, writeFile, initFiles };
