// @flow strict
import React from 'react';

import type { Node } from 'react';

type Props = {|
  hasUnsavedChanges: boolean,
  onSaveChanges: () => void,
|};

const SaveButton = ({ hasUnsavedChanges, onSaveChanges }: Props): Node =>
  hasUnsavedChanges ? (
    <button onClick={onSaveChanges} type="submit">
      Save
    </button>
  ) : null;

export default SaveButton;
