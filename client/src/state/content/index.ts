import { last, omit } from 'lodash';

import {
  CONTENT_RECEIVED,
  CONTENT_FIELD_UPDATED,
  CONTENT_LIST_OCCURRENCE_CREATED,
  CONTENT_LIST_OCCURRENCE_DELETED,
  CONTENT_LIST_FIELD_UPDATED,
} from '../../actions/content';
import { Action } from '../../actions/types';
import {
  BlockId,
  FieldId,
  ListOccurrenceId,
  ListFieldId,
} from '../../constants/types';

import initialState from './initialState';
import { ContentState } from './types';

const content = (
  state: ContentState = initialState,
  action: Action
): ContentState => {
  switch (action.type) {
    case CONTENT_RECEIVED: {
      return action.payload;
    }
    case CONTENT_FIELD_UPDATED: {
      if (
        !action.payload.blockId ||
        !action.payload.fieldId ||
        typeof action.payload.value !== 'string'
      )
        return state;

      const { blockId, fieldId, value } = action.payload;
      const block = state[blockId] || {};

      return {
        ...state,
        [blockId]: {
          ...block,
          [fieldId]: value,
        },
      };
    }
    case CONTENT_LIST_OCCURRENCE_CREATED: {
      if (!action.payload.blockId || !action.payload.fieldId) return state;

      const { blockId, fieldId } = action.payload;
      const block = state[blockId] || {};
      let field = {};

      if (typeof block[fieldId] === 'object') {
        field = block[fieldId];
      }

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
        !action.payload.blockId ||
        !action.payload.fieldId ||
        typeof action.payload.listOccurrenceId !== 'string'
      )
        return state;

      const { blockId, fieldId, listOccurrenceId } = action.payload;
      const block = state[blockId] || {};
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
        !action.payload.blockId ||
        !action.payload.fieldId ||
        typeof action.payload.listOccurrenceId !== 'string' ||
        typeof action.payload.listFieldId !== 'string' ||
        typeof action.payload.value !== 'string'
      )
        return state;

      const {
        blockId,
        fieldId,
        listOccurrenceId,
        listFieldId,
        value,
      } = action.payload;
      const block = state[blockId] || {};
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
  const block = state[blockId] || {};
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
  const block = state[blockId] || {};
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
  const block = state[blockId] || {};
  const field = block[fieldId];

  if (typeof field !== 'object') return [];

  return Object.keys(field);
};
