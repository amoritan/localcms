const localState = require('./localState');

const FAKE_DATA = { a: 1 };

test('writes on the config key', () => {
  localState.setConfig(FAKE_DATA);
  expect(localState.getConfig()).toEqual(FAKE_DATA);
});

test('writes on the content key', () => {
  localState.setContent(FAKE_DATA);
  expect(localState.getContent()).toEqual(FAKE_DATA);
});
