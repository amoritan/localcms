// @flow strict
import type {
  BlockId,
  FieldId,
  ListOccurrenceId,
  ListFieldId,
} from '../constants/types';

import type {
  ContentRequestedAction,
  ContentReceivedAction,
  ContentFieldUpdatedAction,
  ContentListOccurrenceCreatedAction,
  ContentListOccurrenceDeletedAction,
  ContentListFieldUpdatedAction,
} from './types';

export const CONTENT_REQUESTED = 'CONTENT_REQUESTED';
export const CONTENT_RECEIVED = 'CONTENT_RECEIVED';

export const CONTENT_FIELD_UPDATED = 'CONTENT_FIELD_UPDATED';
export const CONTENT_LIST_OCCURRENCE_CREATED =
  'CONTENT_LIST_OCCURRENCE_CREATED';
export const CONTENT_LIST_OCCURRENCE_DELETED =
  'CONTENT_LIST_OCCURRENCE_DELETED';
export const CONTENT_LIST_FIELD_UPDATED = 'CONTENT_LIST_FIELD_UPDATED';

export const contentRequested = (path: string): ContentRequestedAction => ({
  type: CONTENT_REQUESTED,
  payload: { path },
});

export const contentReceived = (
  response: ContentFile
): ContentReceivedAction => ({
  type: CONTENT_RECEIVED,
  payload: response,
});

export const contentFieldUpdated = (
  blockId: BlockId,
  fieldId: FieldId,
  value: string
): ContentFieldUpdatedAction => ({
  type: CONTENT_FIELD_UPDATED,
  payload: { blockId, fieldId, value },
});

export const contentListOccurrenceCreated = (
  blockId: BlockId,
  fieldId: FieldId
): ContentListOccurrenceCreatedAction => ({
  type: CONTENT_LIST_OCCURRENCE_CREATED,
  payload: { blockId, fieldId },
});

export const contentListOccurrenceDeleted = (
  blockId: BlockId,
  fieldId: FieldId,
  listOccurrenceId: ListOccurrenceId
): ContentListOccurrenceDeletedAction => ({
  type: CONTENT_LIST_OCCURRENCE_DELETED,
  payload: { blockId, fieldId, listOccurrenceId },
});

export const contentListFieldUpdated = (
  blockId: BlockId,
  fieldId: FieldId,
  listOccurrenceId: ListOccurrenceId,
  listFieldId: ListFieldId,
  value: string
): ContentListFieldUpdatedAction => ({
  type: CONTENT_LIST_FIELD_UPDATED,
  payload: { blockId, fieldId, listOccurrenceId, listFieldId, value },
});
