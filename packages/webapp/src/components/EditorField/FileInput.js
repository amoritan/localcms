import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FileInput = ({ name }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <input
      type="file"
      className="w-full border-solid border-2 border-gray-200 p-2"
      id={name}
      value={value}
      onChange={handleChange}
    />
  );
};

FileInput.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FileInput;
