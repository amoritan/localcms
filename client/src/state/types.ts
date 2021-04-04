import { ConfigState } from './config/types';
import { ContentState } from './content/types';

export type State = {
  config: ConfigState;
  content: ContentState;
};
