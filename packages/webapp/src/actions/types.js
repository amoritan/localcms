// @flow strict
import type {
  BlockId,
  FieldId,
  ListOccurrenceId,
  ListFieldId,
} from '../constants/types';

// content
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

export type Action =
  | ContentFieldUpdatedAction
  | ContentListOccurrenceCreatedAction
  | ContentListOccurrenceDeletedAction
  | ContentListFieldUpdatedAction;

export type Dispatch = (action: Action) => void;
