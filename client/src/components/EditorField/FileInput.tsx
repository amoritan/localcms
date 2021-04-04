import React, { useState } from 'react';

import { FieldId } from '../../constants/types';

interface Props {
  htmlId: FieldId;
}

const FileInput = ({ htmlId }: Props): JSX.Element => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
