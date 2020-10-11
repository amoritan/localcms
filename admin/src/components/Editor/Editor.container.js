import { connect } from 'react-redux';

import { getConfigBlockById } from '../../state';

import Editor from './Editor';

const mapStateToProps = (state, ownProps) => ({
  block: getConfigBlockById(state, ownProps.match.params.blockId),
});

export default connect(mapStateToProps, null)(Editor);
