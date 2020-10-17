// @flow strict
import { createStore } from 'redux';
import type { Store } from 'redux';

import state from './state';

import type { Action, Dispatch } from './actions/types';
import type { State } from './state/types';

/* eslint-disable no-underscore-dangle */
const store: Store<State, Action, Dispatch> = createStore(
  state,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

export default store;
