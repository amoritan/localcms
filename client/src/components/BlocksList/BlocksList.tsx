import React from 'react';

import { BlockId } from '../../constants/types';

import BlockItem from './BlockItem';

interface Props {
  blocks: Array<BlockId>;
}

const BlocksList = ({ blocks }: Props): JSX.Element => {
  const blockElements = blocks.map((blockId) => (
    <BlockItem key={blockId} id={blockId} />
  ));

  return (
    <nav className="w-1/5 bg-gray-200">
      <ul>{blockElements}</ul>
    </nav>
  );
};

export default BlocksList;
