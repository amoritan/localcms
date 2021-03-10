// @flow strict
import { CONFIG_RECEIVED } from '../../actions/config';
import {
  CONTENT_FIELD_UPDATED,
  CONTENT_LIST_OCCURRENCE_CREATED,
  CONTENT_LIST_OCCURRENCE_DELETED,
  CONTENT_LIST_FIELD_UPDATED,
} from '../../actions/content';
import { SAVE_RECEIVED } from '../../actions/save';

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
        hasUnsavedChanges: false,
      };
    }
    case CONTENT_FIELD_UPDATED:
    case CONTENT_LIST_OCCURRENCE_CREATED:
    case CONTENT_LIST_OCCURRENCE_DELETED:
    case CONTENT_LIST_FIELD_UPDATED:
      return {
        ...state,
        hasUnsavedChanges: true,
      };
    case SAVE_RECEIVED:
      return {
        ...state,
        hasUnsavedChanges: false,
      };
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

export const getHasUnsavedChanges = (state: ConfigState): boolean =>
  state.hasUnsavedChanges;
