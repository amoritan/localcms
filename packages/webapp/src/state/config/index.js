// @flow strict
import { CONFIG_RECEIVED } from '../../actions/config';

import type { BlockId } from '../../constants/types';
import type { ConfigAction } from '../../actions/types';

import initialState from './initialState';
import { mapBlocksFromFile } from './mapping';
import type { ConfigState, ConfigBlock } from './types';

const config = (
  state: ConfigState = initialState,
  action: ConfigAction
): ConfigState => {
  const { type } = action;
  switch (type) {
    case CONFIG_RECEIVED: {
      if (!action.payload || !action.payload.blocks) return state;
      return {
        blocks: mapBlocksFromFile(action.payload.blocks),
      };
    }
    default:
      return state;
  }
};

export default config;

export const getBlockIds = (state: ConfigState): Array<BlockId> =>
  Object.keys(state.blocks);
export const getBlockById = (
  state: ConfigState,
  blockId: BlockId
): ConfigBlock => state.blocks[blockId];
