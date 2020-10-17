// @flow strict
import React from 'react';

import type { Node } from 'react';

import type {
  BlockId,
  FieldId,
  ListOccurrenceId,
  ListFieldId,
  FieldType,
} from '../../constants/types';

import TextInput from './TextInput';
import MarkdownInput from './MarkdownInput';
import FileInput from './FileInput';

type Props = {|
  blockId: BlockId,
  fieldId: FieldId,
  type: FieldType,
  value: string,
  onFieldUpdated: (value: string) => void,
  fromList?: boolean,
  listOccurrenceId?: ListOccurrenceId,
  listFieldId?: ListFieldId,
|};

const EditorField = ({
  blockId,
  fieldId,
  type,
  value,
  onFieldUpdated,
  fromList,
  listOccurrenceId,
  listFieldId,
}: Props): Node => {
  let htmlId = `${blockId}-${fieldId}`;
  if (fromList && listOccurrenceId && listFieldId) {
    htmlId += `-${listOccurrenceId}-${listFieldId}`;
  }

  return (
    <fieldset className={fromList ? 'm-4' : 'my-8'}>
      <label htmlFor={htmlId} className="font-mono bg-gray-200 p-2">
        {fieldId}
      </label>
      {type === 'text' && (
        <TextInput
          htmlId={htmlId}
          value={value}
          onFieldUpdated={onFieldUpdated}
        />
      )}
      {type === 'markdown' && (
        <MarkdownInput
          htmlId={htmlId}
          value={value}
          onFieldUpdated={onFieldUpdated}
        />
      )}
      {type === 'file' && <FileInput htmlId={htmlId} />}
    </fieldset>
  );
};

EditorField.defaultProps = {
  fromList: false,
  listOccurrenceId: null,
  listFieldId: null,
};

export default EditorField;
