import React from 'react';
import PropTypes from 'prop-types';

const Block = ({ name }) => (
  <li className="border-b-2">
    <button type="button" className="p-5 w-full text-left hover:bg-blue-200">
      {name}
    </button>
  </li>
);

Block.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Block;
