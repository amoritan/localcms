// @flow strict
import type { Middleware } from 'redux';

import { configReceived, CONFIG_REQUESTED } from '../actions/config';
import {
  contentRequested,
  contentReceived,
  CONTENT_REQUESTED,
} from '../actions/content';
import type { Action, Dispatch } from '../actions/types';
import type { State } from '../state/types';

const network: Middleware<State, Action, Dispatch> = (store) => (next) => (
  action
) => {
  const { type } = action;

  if (type === CONFIG_REQUESTED) {
    fetch('/config')
      .then((response) => response.json())
      .then((data) => {
        store.dispatch(configReceived(data));
        store.dispatch(contentRequested());
      });
  }

  if (type === CONTENT_REQUESTED) {
    if (action.payload && action.payload.path) {
      fetch('/content')
        .then((response) => response.json())
        .then((data) => {
          store.dispatch(contentReceived(data));
        });
    }
  }

  return next(action);
};

export default network;
