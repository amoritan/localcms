import React from 'react';

import { Props } from './SaveButton.container';

const SaveButton = ({
  hasUnsavedChanges,
  onSaveChanges,
}: Props): JSX.Element => (
  <button onClick={onSaveChanges} type="submit" disabled={!hasUnsavedChanges}>
    Save
  </button>
);

export default SaveButton;
