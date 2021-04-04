import { connect } from 'react-redux';

import { ComponentType } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { getConfigBlockById } from '../../state';
import { State } from '../../state/types';
import { ConfigBlock } from '../../state/config/types';
import { BlockId } from '../../constants/types';

import Editor from './Editor';

type TParams = { blockId: BlockId };

type OwnProps = RouteComponentProps<TParams>;

interface Props {
  block: ConfigBlock | null;
}

const mapStateToProps = (state: State, ownProps: OwnProps): Props => {
  if (!ownProps.match.params.blockId) return { block: null };
  return {
    block: getConfigBlockById(state, ownProps.match.params.blockId),
  };
};

const EditorContainer: ComponentType<OwnProps> = connect(mapStateToProps)(
  Editor
);

export default EditorContainer;
