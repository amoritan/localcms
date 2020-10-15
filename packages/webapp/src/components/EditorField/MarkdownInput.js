// @flow strict
import React, { useState } from 'react';

import type { Node } from 'react';

import type { FieldId } from '../../constants/types';

type Props = {|
  htmlId: FieldId,
  initialValue?: string,
|};

const MarkdownInput = ({ htmlId, initialValue }: Props): Node => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <textarea
      type="text"
      className="w-full border-solid border-2 border-gray-200 p-2"
      rows="12"
      id={htmlId}
      value={value}
      onChange={handleChange}
    />
  );
};

MarkdownInput.defaultProps = {
  initialValue: '',
};

export default MarkdownInput;
