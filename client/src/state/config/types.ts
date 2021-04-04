import {
  BlockId,
  FieldId,
  ListFieldId,
  FieldType,
  FieldTypeBase,
  FIELD_TYPE_LIST,
} from '../../constants/types';

// state
export interface ConfigListField {
  id: ListFieldId;
  type: FieldType;
}

export type ConfigListFields = Record<ListFieldId, ConfigListField>;

export interface ConfigFieldBase {
  id: FieldId;
  type: FieldTypeBase;
}

export interface ConfigFieldWithList {
  id: FieldId;
  type: typeof FIELD_TYPE_LIST;
  listFields: ConfigListFields;
}

export type ConfigField = ConfigFieldBase | ConfigFieldWithList;

export type ConfigFields = Record<FieldId, ConfigField>;

export interface ConfigBlock {
  id: BlockId;
  fields: ConfigFields;
}

export type ConfigBlocks = Record<BlockId, ConfigBlock>;

export interface ConfigState {
  blocks: ConfigBlocks;
  hasUnsavedChanges: boolean;
}

// file
export type ConfigFileListField = Record<ListFieldId, FieldTypeBase>;

export type ConfigFileField = Record<
  FieldId,
  FieldTypeBase | ConfigFileListField
>;

export type ConfigFileBlock = Record<BlockId, ConfigFileField>;

export interface ConfigFile {
  blocks: ConfigFileBlock;
}
