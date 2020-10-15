// @flow strict
import React from 'react';

import type { Node } from 'react';

import type { Field } from '../../state/config/types';

import EditorField from './EditorField';
import ListField from './ListField';

type Props = Field;

const EditorFieldWrapper = (props: Props): Node => {
  const { id, type, listFields } = props;
  if (type === 'list' && listFields)
    return <ListField name={id} listFields={listFields} />;

  return <EditorField name={id} type={type} htmlId={id} />;
};

export default EditorFieldWrapper;
