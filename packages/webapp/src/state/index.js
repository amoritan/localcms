// @flow strict
import { combineReducers } from 'redux';
import type { Reducer } from 'redux';

import type { BlockId } from '../constants/types';
import type { Action } from '../actions/types';

import type { ConfigBlock } from './config/types';

import config, * as fromConfig from './config';
import type { State } from './types';

const reducer: Reducer<State, Action> = combineReducers({
  config,
});

export default reducer;

// config
export const getConfigBlockIds = (state: State): Array<BlockId> =>
  fromConfig.getBlockIds(state.config);
export const getConfigBlockById = (state: State, id: BlockId): ConfigBlock =>
  fromConfig.getBlockById(state.config, id);
