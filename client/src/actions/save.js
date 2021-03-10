// @flow strict
import type { SaveRequestedAction, SaveReceivedAction } from './types';

export const SAVE_REQUESTED = 'SAVE_REQUESTED';
export const SAVE_RECEIVED = 'SAVE_RECEIVED';

export const saveRequested = (): SaveRequestedAction => ({
  type: SAVE_REQUESTED,
});

export const saveReceived = (): SaveReceivedAction => ({
  type: SAVE_RECEIVED,
});
