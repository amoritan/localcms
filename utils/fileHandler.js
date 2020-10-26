const fs = require('fs');

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

module.exports = { readFile, writeFile };
