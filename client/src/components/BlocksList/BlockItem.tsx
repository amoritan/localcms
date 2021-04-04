import React from 'react';
import { startCase } from 'lodash';
import { NavLink } from 'react-router-dom';

import { BlockId } from '../../constants/types';

interface Props {
  id: BlockId;
}

const BlockItem = ({ id }: Props): JSX.Element => {
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
