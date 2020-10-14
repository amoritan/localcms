// @flow strict
import React, { useState } from 'react';

import type { Node } from 'react';

import type { ConfigFieldId } from '../../state/config/types';

type Props = {|
  name: ConfigFieldId,
  initialValue?: string,
|};

const TextInput = ({ name, initialValue }:Props):Node => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <input
      type="text"
      className="w-full border-solid border-2 border-gray-200 p-2"
      id={name}
      value={value}
      onChange={handleChange}
    />
  );
};

TextInput.defaultProps = {
  initialValue: '',
};

export default TextInput;
