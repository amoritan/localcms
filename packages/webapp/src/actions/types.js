// @flow strict
import type {
  BlockId,
  FieldId,
  ListOccurrenceId,
  ListFieldId,
} from '../constants/types';
import type { ConfigFile } from '../state/config/types';
import type { ContentState } from '../state/content/types';

// config
export type ConfigRequestedAction = {|
  type: 'CONFIG_REQUESTED',
|};

export type ConfigReceivedAction = {|
  type: 'CONFIG_RECEIVED',
  payload: ConfigFile,
|};

// content
export type ContentRequestedAction = {|
  type: 'CONTENT_REQUESTED',
  payload: {
    path: string,
  },
|};

export type ContentReceivedAction = {|
  type: 'CONTENT_RECEIVED',
  payload: ContentState,
|};

export type ContentFieldUpdatedAction = {|
  type: 'CONTENT_FIELD_UPDATED',
  payload: {
    blockId: BlockId,
    fieldId: FieldId,
    value: string,
  },
|};

export type ContentListOccurrenceCreatedAction = {|
  type: 'CONTENT_LIST_OCCURRENCE_CREATED',
  payload: {
    blockId: BlockId,
    fieldId: FieldId,
  },
|};
export type ContentListOccurrenceDeletedAction = {|
  type: 'CONTENT_LIST_OCCURRENCE_DELETED',
  payload: {
    blockId: BlockId,
    fieldId: FieldId,
    listOccurrenceId: ListOccurrenceId,
  },
|};

export type ContentListFieldUpdatedAction = {|
  type: 'CONTENT_LIST_FIELD_UPDATED',
  payload: {
    blockId: BlockId,
    fieldId: FieldId,
    listOccurrenceId: ListOccurrenceId,
    listFieldId: ListFieldId,
    value: string,
  },
|};

export type ConfigAction = ConfigRequestedAction | ConfigReceivedAction;

export type ContentAction =
  | ContentFieldUpdatedAction
  | ContentListOccurrenceCreatedAction
  | ContentListOccurrenceDeletedAction
  | ContentListFieldUpdatedAction;

export type Action = ConfigAction | ContentAction;

export type Dispatch = (action: Action) => void;
