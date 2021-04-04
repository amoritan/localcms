import { ConfigFile } from '../state/config/types';

import { ConfigRequestedAction, ConfigReceivedAction } from './types';

export const CONFIG_REQUESTED = 'CONFIG_REQUESTED';
export const CONFIG_RECEIVED = 'CONFIG_RECEIVED';

export const configRequested = (): ConfigRequestedAction => ({
  type: CONFIG_REQUESTED,
});

export const configReceived = (response: ConfigFile): ConfigReceivedAction => ({
  type: CONFIG_RECEIVED,
  payload: response,
});
