// @flow strict
import type { BlockId } from '../../constants/types';

import initialState from './initialState';
import type { ConfigState, ConfigBlock } from './types';

const config = (state: ConfigState = initialState): ConfigState => state;

export default config;

export const getBlockIds = (state: ConfigState): Array<BlockId> =>
  Object.keys(state.blocks);
export const getBlockById = (
  state: ConfigState,
  blockId: BlockId
): ConfigBlock => state.blocks[blockId];
