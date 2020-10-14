// @flow strict
import type { ConfigState } from '../state/config/types';

// config
export type ConfigInitializedAction = {
  type: 'CONFIG_INITIALIZED',
  payload: ConfigState,
};

export type Action = ConfigInitializedAction;

export type Dispatch = (action: Action) => void;
