import { FIELD_TYPE_LIST } from '../../constants/types';

import {
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
    let fieldForState;

    if (typeof fieldsFromFile[fieldFromFileKey] === 'object') {
      let listFieldsFromFile = {};
      listFieldsFromFile = fieldsFromFile[fieldFromFileKey];
      fieldForState = {
        id: fieldFromFileKey,
        type: FIELD_TYPE_LIST,
        listFields: mapListFieldsFromFile(listFieldsFromFile),
      };
    } else {
      fieldForState = {
        id: fieldFromFileKey,
        type: fieldsFromFile[fieldFromFileKey],
      };
    }

    fieldsForState = {
      ...fieldsForState,
      [fieldFromFileKey]: fieldForState,
    };
  });

  return fieldsForState;
};

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
