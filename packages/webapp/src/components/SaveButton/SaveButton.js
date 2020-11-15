// @flow strict
import React from 'react';

import type { Node } from 'react';

type Props = {|
  hasUnsavedChanges: boolean,
|};

const SaveButton = ({ hasUnsavedChanges }: Props): Node =>
  hasUnsavedChanges ? (
    <button onClick={() => {}} type="submit">
      Save
    </button>
  ) : null;

export default SaveButton;
