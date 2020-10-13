import React from 'react';
import PropTypes from 'prop-types';

import BlockItem from './BlockItem';

const BlocksList = ({ blocks }) => {
  const blockElements = blocks.map((blockId) => (
    <BlockItem key={blockId} id={blockId} />
  ));

  return (
    <nav className="w-1/5 bg-gray-200">
      <ul>
        {blockElements}
      </ul>
    </nav>
  );
};

BlocksList.propTypes = {
  blocks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BlocksList;
