import { connect } from 'react-redux';

import { ComponentType } from 'react';

import { getConfigBlockIds } from '../../state';
import { State } from '../../state/types';
import { BlockId } from '../../constants/types';

import BlocksList from './BlocksList';

interface Props {
  blocks: Array<BlockId>;
}

const mapStateToProps = (state: State): Props => ({
  blocks: getConfigBlockIds(state),
});

const BlocksListContainer: ComponentType = connect(mapStateToProps)(BlocksList);

export default BlocksListContainer;
