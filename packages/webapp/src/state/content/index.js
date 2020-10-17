// @flow strict
import { last, omit } from 'lodash';

import {
  CONTENT_FIELD_UPDATED,
  CONTENT_LIST_OCCURRENCE_CREATED,
  CONTENT_LIST_OCCURRENCE_DELETED,
  CONTENT_LIST_FIELD_UPDATED,
} from '../../actions/content';
import type { Action } from '../../actions/types';
import type {
  BlockId,
  FieldId,
  ListOccurrenceId,
  ListFieldId,
} from '../../constants/types';

import initialState from './initialState';
import type { ContentState } from './types';

const content = (
  state: ContentState = initialState,
  { type, payload }: Action
): ContentState => {
  switch (type) {
    case CONTENT_FIELD_UPDATED: {
      if (
        !payload.blockId ||
        !payload.fieldId ||
        typeof payload.value !== 'string'
      )
        return state;

      const { blockId, fieldId, value } = payload;
      const block = state[blockId];

      return {
        ...state,
        [blockId]: {
          ...block,
          [fieldId]: value,
        },
      };
    }
    case CONTENT_LIST_OCCURRENCE_CREATED: {
      if (!payload.blockId || !payload.fieldId) return state;

      const { blockId, fieldId } = payload;
      const block = state[blockId];
      const field = typeof block[fieldId] === 'object' ? block[fieldId] : {};

      const lastOccurrenceId = Number(last(Object.keys(field)));
      const newOccurrenceId: string = lastOccurrenceId
        ? String(lastOccurrenceId + 1)
        : '1';

      return {
        ...state,
        [blockId]: {
          ...block,
          [fieldId]: {
            ...field,
            [newOccurrenceId]: {},
          },
        },
      };
    }
    case CONTENT_LIST_OCCURRENCE_DELETED: {
      if (
        !payload.blockId ||
        !payload.fieldId ||
        typeof payload.listOccurrenceId !== 'string'
      )
        return state;

      const { blockId, fieldId, listOccurrenceId } = payload;
      const block = state[blockId];
      const field = block[fieldId];

      if (typeof field !== 'object') return state;

      return {
        ...state,
        [blockId]: {
          ...block,
          [fieldId]: omit(field, listOccurrenceId),
        },
      };
    }
    case CONTENT_LIST_FIELD_UPDATED: {
      if (
        !payload.blockId ||
        !payload.fieldId ||
        typeof payload.listOccurrenceId !== 'string' ||
        typeof payload.listFieldId !== 'string' ||
        typeof payload.value !== 'string'
      )
        return state;

      const {
        blockId,
        fieldId,
        listOccurrenceId,
        listFieldId,
        value,
      } = payload;
      const block = state[blockId];
      const field = block[fieldId];

      if (typeof field !== 'object') return state;

      const listOccurrence = field[listOccurrenceId];

      return {
        ...state,
        [blockId]: {
          ...block,
          [fieldId]: {
            ...field,
            [listOccurrenceId]: {
              ...listOccurrence,
              [listFieldId]: value,
            },
          },
        },
      };
    }
    default:
      return state;
  }
};

export default content;

export const getFieldValue = (
  state: ContentState,
  blockId: BlockId,
  fieldId: FieldId
): string => {
  const block = state[blockId];
  const field = block[fieldId];

  if (typeof field !== 'string') return '';

  return field;
};
export const getListFieldValue = (
  state: ContentState,
  blockId: BlockId,
  fieldId: FieldId,
  listOccurrenceId: ListOccurrenceId,
  listFieldId: ListFieldId
): string => {
  const block = state[blockId];
  const field = block[fieldId];

  if (typeof field !== 'object') return '';

  const listOccurrence = field[listOccurrenceId];
  const listField = listOccurrence[listFieldId];

  return listField;
};
export const getListFieldOccurrenceIds = (
  state: ContentState,
  blockId: BlockId,
  fieldId: FieldId
): Array<ListOccurrenceId> => {
  const block = state[blockId];
  const field = block[fieldId];

  if (typeof field !== 'object') return [];

  return Object.keys(field);
};
