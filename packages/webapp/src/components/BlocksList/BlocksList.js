// @flow strict
import React from 'react';

import type { Node } from 'react';

import type { ConfigBlockId } from '../../state/config/types';

import BlockItem from './BlockItem';

type Props = {|
  blocks: Array<ConfigBlockId>,
|};

const BlocksList = ({ blocks }: Props): Node => {
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
