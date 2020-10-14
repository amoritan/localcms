// @flow strict
import { CONFIG_INITIALIZED } from '../../actions/config';
import type { Action } from '../../actions/types';

import initialState from './initialState';
import type { ConfigState, ConfigBlockId, Block } from './types';

const config = (
  state: ConfigState = initialState,
  { type, payload }: Action
): ConfigState => {
  switch (type) {
    case CONFIG_INITIALIZED:
      return payload;
    default:
      return state;
  }
};

export default config;

export const getBlockIds = (state: ConfigState): Array<ConfigBlockId> =>
  Object.keys(state.blocks);
export const getBlockById = (state: ConfigState, id: ConfigBlockId): Block =>
  state.blocks[id];
