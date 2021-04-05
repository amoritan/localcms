import { useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { getConfigBlockById } from '../../state';
import { State } from '../../state/types';
import { ConfigBlock } from '../../state/config/types';
import { BlockId } from '../../constants/types';

import Editor from './Editor';

type TParams = { blockId: BlockId };

type OwnProps = RouteComponentProps<TParams>;

export interface Props extends OwnProps {
  block: ConfigBlock;
}

const EditorContainer = (ownProps: OwnProps): JSX.Element | null => {
  if (!ownProps.match.params.blockId) return null;

  const block = useSelector((state: State) =>
    getConfigBlockById(state, ownProps.match.params.blockId)
  );

  return Editor({
    ...ownProps,
    block,
  });
};

export default EditorContainer;
