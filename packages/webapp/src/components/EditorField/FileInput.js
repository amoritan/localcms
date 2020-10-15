// @flow strict
import React, { useState } from 'react';

import type { Node } from 'react';

import type { FieldId } from '../../constants/types';

type Props = {|
  htmlId: FieldId,
|};

const FileInput = ({ htmlId }: Props): Node => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <input
      type="file"
      className="w-full border-solid border-2 border-gray-200 p-2"
      id={htmlId}
      value={value}
      onChange={handleChange}
    />
  );
};

export default FileInput;
