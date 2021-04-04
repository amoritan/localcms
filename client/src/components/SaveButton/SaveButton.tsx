import React from 'react';

interface Props {
  hasUnsavedChanges: boolean;
  onSaveChanges: () => void;
}

const SaveButton = ({
  hasUnsavedChanges,
  onSaveChanges,
}: Props): JSX.Element | null =>
  hasUnsavedChanges ? (
    <button onClick={onSaveChanges} type="submit">
      Save
    </button>
  ) : null;

export default SaveButton;
