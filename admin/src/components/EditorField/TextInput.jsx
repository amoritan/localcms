import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ name, initialValue }) => {
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

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  initialValue: PropTypes.string,
};

TextInput.defaultProps = {
  initialValue: '',
};

export default TextInput;
