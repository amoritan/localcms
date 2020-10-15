// @flow strict
import type {
  BlockId,
  FieldId,
  ListFieldId,
  FieldType,
} from '../../constants/types';

export type ConfigListField = {|
  id: ListFieldId,
  type: FieldType,
|};

export type ConfigField = {|
  id: FieldId,
  type: FieldType,
  listFields?: {
    [ListFieldId]: ConfigListField,
  },
|};

export type ConfigBlock = {|
  id: BlockId,
  fields: {
    [FieldId]: ConfigField,
  },
|};

export type ConfigState = {|
  blocks: {
    [BlockId]: ConfigBlock,
  },
|};
