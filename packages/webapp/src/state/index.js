// @flow strict
import { combineReducers } from 'redux';
import type { Reducer } from 'redux';

import type {
  BlockId,
  FieldId,
  ListOccurrenceId,
  ListFieldId,
} from '../constants/types';
import type { Action } from '../actions/types';

import type { ConfigBlock } from './config/types';

import config, * as fromConfig from './config';
import content, * as fromContent from './content';
import type { State } from './types';

const reducer: Reducer<State, Action> = combineReducers({
  config,
  content,
});

export default reducer;

// config
export const getConfigBlockIds = (state: State): Array<BlockId> =>
  fromConfig.getBlockIds(state.config);
export const getConfigBlockById = (
  state: State,
  blockId: BlockId
): ConfigBlock => fromConfig.getBlockById(state.config, blockId);
export const getHasUnsavedChanges = (state: State): boolean =>
  fromConfig.getHasUnsavedChanges(state.config);

// content
export const getFieldValue = (
  state: State,
  blockId: BlockId,
  fieldId: FieldId
): string => fromContent.getFieldValue(state.content, blockId, fieldId);
export const getListFieldValue = (
  state: State,
  blockId: BlockId,
  fieldId: FieldId,
  listOccurrenceId: ListOccurrenceId,
  listFieldId: ListFieldId
): string =>
  fromContent.getListFieldValue(
    state.content,
    blockId,
    fieldId,
    listOccurrenceId,
    listFieldId
  );
export const getListFieldOccurrenceIds = (
  state: State,
  blockId: BlockId,
  fieldId: FieldId
): Array<ListOccurrenceId> =>
  fromContent.getListFieldOccurrenceIds(state.content, blockId, fieldId);
