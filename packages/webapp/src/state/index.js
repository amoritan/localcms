import { combineReducers } from 'redux';

import config, * as fromConfig from './config';

export default combineReducers({
  config,
});

// config
export const getConfigBlocks = (state) => fromConfig.getBlocks(state.config);
export const getConfigBlockById = (state, id) =>
  fromConfig.getBlockById(state.config, id);
