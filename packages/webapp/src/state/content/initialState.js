// @flow strict
import type { ContentState } from './types';

const fakeContent: ContentState = {
  header: {},
  blog: {},
};

const initialState = fakeContent; // TODO: Fetch from file reading logic

export default initialState;
