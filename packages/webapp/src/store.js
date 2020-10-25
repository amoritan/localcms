// @flow strict
import { createStore, applyMiddleware, compose } from 'redux';
import type { Store } from 'redux';

import state from './state';
import network from './middlewares/network';

import type { Action, Dispatch } from './actions/types';
import type { State } from './state/types';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const enhancers = composeEnhancers(applyMiddleware(network));

const store: Store<State, Action, Dispatch> = createStore(state, enhancers);

export default store;
