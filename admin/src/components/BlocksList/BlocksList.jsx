import React from 'react';

import Block from './Block';
import { BlocksListType } from './types';

const BlocksList = ({ data }) => {
  const blockElements = data.map((blockData) => (
    <Block key={blockData.slug} {...blockData} />
  ));

  return (
    <nav className="w-1/5 bg-gray-200">
      <ul>
        {blockElements}
      </ul>
    </nav>
  );
};

BlocksList.propTypes = BlocksListType;

export default BlocksList;
