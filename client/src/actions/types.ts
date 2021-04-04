import { Dispatch as ReduxDispatch } from 'redux';

import {
  BlockId,
  FieldId,
  ListOccurrenceId,
  ListFieldId,
} from '../constants/types';
import { ConfigFile } from '../state/config/types';
import { ContentState } from '../state/content/types';

import { CONFIG_REQUESTED, CONFIG_RECEIVED } from './config';
import {
  CONTENT_REQUESTED,
  CONTENT_RECEIVED,
  CONTENT_FIELD_UPDATED,
  CONTENT_LIST_OCCURRENCE_CREATED,
  CONTENT_LIST_OCCURRENCE_DELETED,
  CONTENT_LIST_FIELD_UPDATED,
} from './content';
import { SAVE_REQUESTED, SAVE_RECEIVED } from './save';

// config
export interface ConfigRequestedAction {
  type: typeof CONFIG_REQUESTED;
}

export interface ConfigReceivedAction {
  type: typeof CONFIG_RECEIVED;
  payload: ConfigFile;
}

// content
export interface ContentRequestedAction {
  type: typeof CONTENT_REQUESTED;
}

export interface ContentReceivedAction {
  type: typeof CONTENT_RECEIVED;
  payload: ContentState;
}

export interface ContentFieldUpdatedAction {
  type: typeof CONTENT_FIELD_UPDATED;
  payload: {
    blockId: BlockId;
    fieldId: FieldId;
    value: string;
  };
}

export interface ContentListOccurrenceCreatedAction {
  type: typeof CONTENT_LIST_OCCURRENCE_CREATED;
  payload: {
    blockId: BlockId;
    fieldId: FieldId;
  };
}
export interface ContentListOccurrenceDeletedAction {
  type: typeof CONTENT_LIST_OCCURRENCE_DELETED;
  payload: {
    blockId: BlockId;
    fieldId: FieldId;
    listOccurrenceId: ListOccurrenceId;
  };
}

export interface ContentListFieldUpdatedAction {
  type: typeof CONTENT_LIST_FIELD_UPDATED;
  payload: {
    blockId: BlockId;
    fieldId: FieldId;
    listOccurrenceId: ListOccurrenceId;
    listFieldId: ListFieldId;
    value: string;
  };
}

// save
export interface SaveRequestedAction {
  type: typeof SAVE_REQUESTED;
}

export interface SaveReceivedAction {
  type: typeof SAVE_RECEIVED;
}

// shared
export type ConfigAction = ConfigRequestedAction | ConfigReceivedAction;

export type ContentAction =
  | ContentRequestedAction
  | ContentReceivedAction
  | ContentFieldUpdatedAction
  | ContentListOccurrenceCreatedAction
  | ContentListOccurrenceDeletedAction
  | ContentListFieldUpdatedAction;

export type SaveAction = SaveRequestedAction | SaveReceivedAction;

export type Action = ConfigAction | ContentAction | SaveAction;

export type Dispatch = ReduxDispatch<Action>;
