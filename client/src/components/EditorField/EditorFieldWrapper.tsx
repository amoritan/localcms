import React from 'react';

import { ConfigField } from '../../state/config/types';
import { BlockId, FIELD_TYPE_LIST } from '../../constants/types';

import EditorField from './EditorField.container';
import ListField from './ListField.container';

interface Props {
  blockId: BlockId;
  fieldConfig: ConfigField;
}

const EditorFieldWrapper = ({ blockId, fieldConfig }: Props): JSX.Element => {
  if (fieldConfig.type === FIELD_TYPE_LIST) {
    return (
      <ListField
        blockId={blockId}
        fieldId={fieldConfig.id}
        listFields={fieldConfig.listFields}
      />
    );
  }

  return (
    <EditorField
      blockId={blockId}
      fieldId={fieldConfig.id}
      type={fieldConfig.type}
    />
  );
};

export default EditorFieldWrapper;
