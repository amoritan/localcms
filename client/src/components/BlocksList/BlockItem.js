// @flow strict
import React from 'react';
import { startCase } from 'lodash';
import { NavLink } from 'react-router-dom';

import type { Node } from 'react';

import type { BlockId } from '../../constants/types';

type Props = {|
  id: BlockId,
|};

const BlockItem = ({ id }: Props): Node => {
  const name = startCase(id);

  return (
    <li className="border-b-2">
      <NavLink
        className="block p-5 w-full text-left hover:bg-blue-200"
        activeClassName="bg-blue-200"
        to={`/block/${id}`}
      >
        {name}
      </NavLink>
    </li>
  );
};

export default BlockItem;
