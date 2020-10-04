import React from 'react';

import { BlockType } from './types';

const Block = ({
  active,
  name,
  onSelected,
  slug,
}) => {
  const handleClick = () => {
    onSelected(slug);
  };

  return (
    <li className="border-b-2">
      <button
        className={`p-5 w-full text-left ${active ? 'bg-blue-200' : 'hover:bg-blue-200'}`}
        onClick={handleClick}
        type="button"
      >
        {name}
      </button>
    </li>
  );
};

Block.propTypes = BlockType;

export default Block;
