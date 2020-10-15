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

export type BlockId = string;
export type FieldId = string;
export type ListOccurrenceId = string;
export type ListFieldId = string;
