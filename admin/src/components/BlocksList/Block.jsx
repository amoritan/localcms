import React from 'react';
import PropTypes from 'prop-types';
import { startCase } from 'lodash';

const Block = ({ id }) => {
  const name = startCase(id);
  const active = false;
  return (
    <li className="border-b-2">
      <button
        className={`p-5 w-full text-left ${active ? 'bg-blue-200' : 'hover:bg-blue-200'}`}
        type="button"
      >
        {name}
      </button>
    </li>
  );
};

Block.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Block;
