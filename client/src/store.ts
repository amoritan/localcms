import { createStore, applyMiddleware, compose } from 'redux';
import { Store } from 'redux';

import state from './state';
import network from './middlewares/network';
import { Action } from './actions/types';
import { State } from './state/types';

/* eslint-disable no-underscore-dangle */
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const enhancers = composeEnhancers(applyMiddleware(network));

const store: Store<State, Action> = createStore(state, enhancers);

export default store;
