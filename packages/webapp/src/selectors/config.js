import { createSelector } from 'reselect';

import { getConfigBlocks } from '../state';

export const getBlocksIds = createSelector(
  [(state) => getConfigBlocks(state)],
  (configBlocks) => Object.keys(configBlocks),
);
