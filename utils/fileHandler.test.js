const fs = require('fs');

const { readFile, writeFile } = require('./fileHandler');

const FAKE_CONTENT = {
  blocks: {
    first: {
      title: 'Fake Title',
    },
  },
};
const FAKE_CONTENT_FILE_PATH = 'fake-content.json';

afterEach(() => {
  fs.unlink(`${process.cwd()}/${FAKE_CONTENT_FILE_PATH}`, (err) => {
    if (err) throw err;
  });
});

test('writes and read files from the local environment', () => {
  return writeFile(FAKE_CONTENT_FILE_PATH, FAKE_CONTENT).then(() => {
    expect(readFile(FAKE_CONTENT_FILE_PATH)).resolves.toStrictEqual(
      FAKE_CONTENT
    );
  });
});
