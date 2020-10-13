import React, { useState } from 'react';
import PropTypes from 'prop-types';

const MarkdownInput = ({ name, initialValue }) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <textarea
      type="text"
      className="w-full border-solid border-2 border-gray-200 p-2"
      rows="12"
      id={name}
      value={value}
      onChange={handleChange}
    />
  );
};

MarkdownInput.propTypes = {
  name: PropTypes.string.isRequired,
  initialValue: PropTypes.string,
};

MarkdownInput.defaultProps = {
  initialValue: '',
};

export default MarkdownInput;
