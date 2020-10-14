// @flow strict
import { createStore } from 'redux';
import type { Store } from 'redux';

import state from './state';

import type { Action, Dispatch } from './actions/types';
import type { State } from './state/types';

const store: Store<State, Action, Dispatch> = createStore(state);

export default store;
