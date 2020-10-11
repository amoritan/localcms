import React from 'react';
import PropTypes from 'prop-types';

import Block from './Block';

const BlocksList = ({ blocks }) => {
  const blockElements = blocks.map((blockId) => (
    <Block key={blockId} id={blockId} />
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
