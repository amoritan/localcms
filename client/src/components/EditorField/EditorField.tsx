import React from 'react';

import TextInput from './TextInput';
import MarkdownInput from './MarkdownInput';
import FileInput from './FileInput';
import { Props } from './EditorField.container';

const EditorField = ({
  blockId,
  fieldId,
  type,
  value,
  onFieldUpdated,
  fromList,
  listOccurrenceId,
  listFieldId,
}: Props): JSX.Element => {
  let htmlId = `${blockId}-${fieldId}`;
  if (fromList && listOccurrenceId && listFieldId) {
    htmlId += `-${listOccurrenceId}-${listFieldId}`;
  }

  return (
    <fieldset className={fromList ? 'm-4' : 'my-8'}>
      <label htmlFor={htmlId} className="font-mono bg-gray-200 p-2">
        {listFieldId || fieldId}
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
