// @flow strict
import type { ConfigFile } from '../state/config/types';

import type { ConfigRequestedAction, ConfigReceivedAction } from './types';

export const CONFIG_REQUESTED = 'CONFIG_REQUESTED';
export const CONFIG_RECEIVED = 'CONFIG_RECEIVED';

export const configRequested = (): ConfigRequestedAction => ({
  type: CONFIG_REQUESTED,
});

export const configReceived = (response: ConfigFile): ConfigReceivedAction => ({
  type: CONFIG_RECEIVED,
  payload: response,
});
