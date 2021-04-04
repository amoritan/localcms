export const FIELD_TYPE_TEXT = 'text';
export const FIELD_TYPE_MARKDOWN = 'markdown';
export const FIELD_TYPE_FILE = 'file';
export const FIELD_TYPE_LIST = 'list';

export type FieldType =
  | typeof FIELD_TYPE_TEXT
  | typeof FIELD_TYPE_MARKDOWN
  | typeof FIELD_TYPE_FILE
  | typeof FIELD_TYPE_LIST;

export type FieldTypeBase =
  | typeof FIELD_TYPE_TEXT
  | typeof FIELD_TYPE_MARKDOWN
  | typeof FIELD_TYPE_FILE;

export type BlockId = string;
export type FieldId = string;
export type ListOccurrenceId = string;
export type ListFieldId = string;
