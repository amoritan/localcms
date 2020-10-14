// @flow strict
import { connect } from 'react-redux';

import type { ComponentType } from 'react';
import type { ContextRouter } from 'react-router-dom';

import { getConfigBlockById } from '../../state';

import type { State } from '../../state/types';
import type { Block } from '../../state/config/types';

import Editor from './Editor';

type OwnProps = {|
  ...ContextRouter,
|};

type Props = {|
  block: ?Block,
|};

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
