import React from 'react';

import BlockItem from './BlockItem';
import { Props } from './BlocksList.container';

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
