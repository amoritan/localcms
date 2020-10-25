// @flow strict
import type { Middleware } from 'redux';

import { configReceived, CONFIG_REQUESTED } from '../actions/config';
import type { Action, Dispatch } from '../actions/types';
import type { State } from '../state/types';

const network: Middleware<State, Action, Dispatch> = (store) => (next) => (
  action
) => {
  const { type } = action;

  if (type === CONFIG_REQUESTED) {
    fetch('/files/config')
      .then((response) => response.json())
      .then((data) => store.dispatch(configReceived(data)));
  }

  return next(action);
};

export default network;
