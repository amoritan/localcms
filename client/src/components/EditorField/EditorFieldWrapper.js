// @flow strict
import React from 'react';

import type { Node } from 'react';

import type { ConfigField } from '../../state/config/types';
import type { BlockId } from '../../constants/types';

import EditorField from './EditorField.container';
import ListField from './ListField.container';

type Props = {|
  blockId: BlockId,
  fieldConfig: ConfigField,
|};

const EditorFieldWrapper = ({ blockId, fieldConfig }: Props): Node => {
  const { id, type, listFields } = fieldConfig;
  if (type === 'list' && listFields)
    return <ListField blockId={blockId} fieldId={id} listFields={listFields} />;

  return <EditorField blockId={blockId} fieldId={id} type={type} />;
};

export default EditorFieldWrapper;
