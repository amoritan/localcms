import { connect } from 'react-redux';

import { getBlocksIds } from '../../selectors/config';

import BlocksList from './BlocksList';

const mapStateToProps = (state) => ({
  blocks: getBlocksIds(state),
});

export default connect(mapStateToProps, null)(BlocksList);
