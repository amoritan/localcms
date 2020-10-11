import React from 'react';
import PropTypes from 'prop-types';

import TextInput from './TextInput';
import MarkdownInput from './MarkdownInput';
import FileInput from './FileInput';

const EditorField = ({ id, type, fromList }) => (
  <fieldset className={fromList ? 'm-4' : 'my-8'}>
    <label htmlFor={id} className="font-mono bg-gray-200 p-2">{id}</label>
    {type === 'text' && <TextInput name={id} />}
    {type === 'markdown' && <MarkdownInput name={id} />}
    {type === 'file' && <FileInput name={id} />}
  </fieldset>
);

EditorField.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  fromList: PropTypes.bool,
};

EditorField.defaultProps = {
  fromList: false,
};

export default EditorField;
