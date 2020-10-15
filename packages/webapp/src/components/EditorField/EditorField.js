// @flow strict
import React from 'react';

import type { Node } from 'react';

import type { ConfigFieldId, FieldType } from '../../state/config/types';

import TextInput from './TextInput';
import MarkdownInput from './MarkdownInput';
import FileInput from './FileInput';

type Props = {|
  name: ConfigFieldId,
  type: FieldType,
  htmlId: string,
  fromList?: boolean,
|};

const EditorField = ({ name, type, htmlId, fromList }: Props): Node => (
  <fieldset className={fromList ? 'm-4' : 'my-8'}>
    <label htmlFor={htmlId} className="font-mono bg-gray-200 p-2">
      {name}
    </label>
    {type === 'text' && <TextInput htmlId={htmlId} />}
    {type === 'markdown' && <MarkdownInput htmlId={htmlId} />}
    {type === 'file' && <FileInput htmlId={htmlId} />}
  </fieldset>
);

EditorField.defaultProps = {
  fromList: false,
};

export default EditorField;
