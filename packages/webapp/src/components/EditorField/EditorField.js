// @flow strict
import React from 'react';

import type { Node } from 'react';

import type { ConfigFieldId, FieldType } from '../../state/config/types';

import TextInput from './TextInput';
import MarkdownInput from './MarkdownInput';
import FileInput from './FileInput';

type Props = {|
  id: ConfigFieldId,
  type: FieldType,
  fromList?: boolean,
|};

const EditorField = ({ id, type, fromList }:Props):Node => (
  <fieldset className={fromList ? 'm-4' : 'my-8'}>
    <label htmlFor={id} className="font-mono bg-gray-200 p-2">
      {id}
    </label>
    {type === 'text' && <TextInput name={id} />}
    {type === 'markdown' && <MarkdownInput name={id} />}
    {type === 'file' && <FileInput name={id} />}
  </fieldset>
);

EditorField.defaultProps = {
  fromList: false,
};

export default EditorField;
