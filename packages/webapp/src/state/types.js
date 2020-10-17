// @flow strict
import type { ConfigState } from './config/types';
import type { ContentState } from './content/types';

export type State = {
  config: ConfigState,
  content: ContentState,
};
