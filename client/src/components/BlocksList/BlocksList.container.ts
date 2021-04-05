import { useSelector } from 'react-redux';

import { getConfigBlockIds } from '../../state';
import { State } from '../../state/types';
import { BlockId } from '../../constants/types';

import BlocksList from './BlocksList';

export interface Props {
  blocks: Array<BlockId>;
}

const BlocksListContainer = (): JSX.Element => {
  const blocks = useSelector((state: State) => getConfigBlockIds(state));

  return BlocksList({ blocks });
};

export default BlocksListContainer;
