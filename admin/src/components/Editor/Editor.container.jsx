import React from 'react';

import Editor from './Editor';
import { EditorContainerProps, FIELD_TYPE_LIST } from './types';

const EditorContainer = ({ config }) => {
  if (!config) { return null; }
  const { name, slug } = config;
  const fields = Object.keys(config.fields).map((fieldName) => {
    const fieldType = config.fields[fieldName];

    if (typeof fieldType === 'string') {
      return { fieldName, fieldType };
    }

    const listItems = Object.keys(fieldType).map((listFieldName) => {
      const listFieldType = fieldType[listFieldName];
      return {
        fieldName: listFieldName,
        fieldType: listFieldType,
      };
    });

    return {
      fieldName,
      fieldType: FIELD_TYPE_LIST,
      listItems,
    };
  });

  return <Editor name={name} slug={slug} fields={fields} />;
};

EditorContainer.propTypes = EditorContainerProps;

export default EditorContainer;
