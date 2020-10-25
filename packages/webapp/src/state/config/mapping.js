// @flow strict
import type {
  ConfigFileBlock,
  ConfigFileField,
  ConfigFileListField,
  ConfigBlocks,
  ConfigFields,
  ConfigListFields,
} from './types';

const mapListFieldsFromFile = (
  listFieldsFromFile: ConfigFileListField
): ConfigListFields => {
  let listFieldsForState = {};

  Object.keys(listFieldsFromFile).forEach((listFieldFromFileKey) => {
    listFieldsForState = {
      ...listFieldsForState,
      [listFieldFromFileKey]: {
        id: listFieldFromFileKey,
        type: listFieldsFromFile[listFieldFromFileKey],
      },
    };
  });

  return listFieldsForState;
};

const mapFieldsFromFile = (fieldsFromFile: ConfigFileField): ConfigFields => {
  let fieldsForState = {};

  Object.keys(fieldsFromFile).forEach((fieldFromFileKey) => {
    const fieldFromFileType =
      typeof fieldsFromFile[fieldFromFileKey] === 'string'
        ? fieldsFromFile[fieldFromFileKey]
        : 'list';

    let fieldForState = {
      id: fieldFromFileKey,
      type: fieldFromFileType,
    };

    if (typeof fieldsFromFile[fieldFromFileKey] === 'object') {
      fieldForState = {
        ...fieldForState,
        listFields: mapListFieldsFromFile(fieldsFromFile[fieldFromFileKey]),
      };
    }

    fieldsForState = {
      ...fieldsForState,
      [fieldFromFileKey]: fieldForState,
    };
  });

  return fieldsForState;
};

// eslint-disable-next-line import/prefer-default-export
export const mapBlocksFromFile = (
  blocksFromFile: ConfigFileBlock
): ConfigBlocks => {
  let blocksForState = {};

  Object.keys(blocksFromFile).forEach((blockFromFileKey) => {
    const fieldsForState = mapFieldsFromFile(blocksFromFile[blockFromFileKey]);

    blocksForState = {
      ...blocksForState,
      [blockFromFileKey]: {
        id: blockFromFileKey,
        fields: fieldsForState,
      },
    };
  });

  return blocksForState;
};
