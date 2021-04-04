import { Middleware } from 'redux';

import { configReceived, CONFIG_REQUESTED } from '../actions/config';
import {
  contentRequested,
  contentReceived,
  CONTENT_REQUESTED,
} from '../actions/content';
import { saveReceived, SAVE_REQUESTED } from '../actions/save';
import { getContent } from '../state';
import { Dispatch } from '../actions/types';
import { State } from '../state/types';

const network: Middleware<Dispatch, State> = (store) => (next) => (action) => {
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
    fetch('/content')
      .then((response) => response.json())
      .then((data) => {
        store.dispatch(contentReceived(data));
      });
  }

  if (type === SAVE_REQUESTED) {
    const content = getContent(store.getState());
    console.log('payload', content);
    fetch('/content', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(content),
    })
      .then((response) => response.json())
      .then(() => {
        store.dispatch(saveReceived());
      });
  }

  return next(action);
};

export default network;
