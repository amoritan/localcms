// @flow strict
import type {
  BlockId,
  FieldId,
  ListFieldId,
  FieldType,
  FIELD_TYPE_TEXT,
  FIELD_TYPE_MARKDOWN,
  FIELD_TYPE_FILE,
} from '../../constants/types';

// state
export type ConfigListField = {|
  id: ListFieldId,
  type: FieldType,
|};

export type ConfigListFields = {|
  [ListFieldId]: ConfigListField,
|};

export type ConfigField = {|
  id: FieldId,
  type: FieldType,
  listFields?: ConfigListFields,
|};

export type ConfigFields = {|
  [FieldId]: ConfigField,
|};

export type ConfigBlock = {|
  id: BlockId,
  fields: ConfigFields,
|};

export type ConfigBlocks = {|
  [BlockId]: ConfigBlock,
|};

export type ConfigState = {|
  blocks: ConfigBlocks,
  hasUnsavedChanges: boolean,
|};

// file
export type ConfigFileFieldType =
  | FIELD_TYPE_TEXT
  | FIELD_TYPE_MARKDOWN
  | FIELD_TYPE_FILE;

export type ConfigFileListField = {|
  [ListFieldId]: ConfigFileFieldType,
|};

export type ConfigFileField = {|
  [FieldId]: ConfigFileFieldType | ConfigFileListField,
|};

export type ConfigFileBlock = {|
  [BlockId]: ConfigFileField,
|};

export type ConfigFile = {
  blocks: ConfigFileBlock,
};
