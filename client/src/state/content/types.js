// @flow strict
import type {
  BlockId,
  FieldId,
  ListOccurrenceId,
  ListFieldId,
} from '../../constants/types';

export type ContentList = {|
  [ListOccurrenceId]: {
    [ListFieldId]: string,
  },
|};

export type ContentState = {|
  [BlockId]: {
    [FieldId]: ContentList | string,
  },
|};
