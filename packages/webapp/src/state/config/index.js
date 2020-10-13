import { CONFIG_INITIALIZED } from '../../actions/config';

import initialState from './initialState';

const config = (state = initialState, { type, payload }) => {
  switch (type) {
    case CONFIG_INITIALIZED:
      return payload;
    default:
      return state;
  }
};

export default config;

export const getBlocks = (state) => state.blocks;
export const getBlockById = (state, id) => state.blocks[id];
