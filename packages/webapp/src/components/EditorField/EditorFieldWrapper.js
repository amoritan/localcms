// @flow strict
import React from 'react';

import type { Node } from 'react';

import type { Field } from '../../state/config/types';

import EditorField from './EditorField';

type Props = Field;

const EditorFieldWrapper = (props:Props):Node => {
  const { id, type } = props;
  if (type === 'list') return null;

  return <EditorField id={id} type={type} />;
};

export default EditorFieldWrapper;
