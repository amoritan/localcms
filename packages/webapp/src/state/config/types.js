// @flow strict
export type FIELD_TYPE_TEXT = 'text';
export type FIELD_TYPE_MARKDOWN = 'markdown';
export type FIELD_TYPE_FILE = 'file';
export type FIELD_TYPE_LIST = 'list';

export type FieldType =
  | FIELD_TYPE_TEXT
  | FIELD_TYPE_MARKDOWN
  | FIELD_TYPE_FILE
  | FIELD_TYPE_LIST;
export type ListFieldType =
  | FIELD_TYPE_TEXT
  | FIELD_TYPE_MARKDOWN
  | FIELD_TYPE_FILE;

export type ConfigBlockId = string;
export type ConfigFieldId = string;

export type ListField = {|
  id: ConfigFieldId,
  type: ListFieldType,
|};

export type Field = {|
  id: ConfigFieldId,
  type: FieldType,
  listFields?: {
    [ConfigFieldId]: ListField,
  },
|};

export type Block = {|
  id: ConfigBlockId,
  fields: {
    [ConfigFieldId]: Field,
  },
|};

export type ConfigState = {|
  blocks: {
    [ConfigBlockId]: Block,
  },
|};
