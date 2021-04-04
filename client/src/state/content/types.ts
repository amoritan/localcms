import {
  BlockId,
  FieldId,
  ListOccurrenceId,
  ListFieldId,
} from '../../constants/types';

type ListField = Record<ListFieldId, string>;
export type ContentList = Record<ListOccurrenceId, ListField>;

type Field = Record<FieldId, ContentList | string>;
export type ContentState = Record<BlockId, Field>;
