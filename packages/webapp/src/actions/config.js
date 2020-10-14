// @flow strict
import type { ConfigState } from '../state/config/types';

import type { ConfigInitializedAction } from './types';

export const CONFIG_INITIALIZED = 'CONFIG_INITIALIZED';

export const configInitialized = (
  config: ConfigState
): ConfigInitializedAction => ({
  type: CONFIG_INITIALIZED,
  payload: config,
});
