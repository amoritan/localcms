// @flow strict
import { connect } from 'react-redux';
import type { ComponentType } from 'react';

import { configRequested } from '../../actions/config';
import type { Dispatch } from '../../actions/types';

import App from './App';

type Props = {|
  requestConfig: () => void,
|};

const mapDispatchToProps = (dispatch: Dispatch): Props => ({
  requestConfig: () => {
    dispatch(configRequested());
  },
});

const AppContainer: ComponentType<Props> = connect(
  null,
  mapDispatchToProps
)(App);

export default AppContainer;
