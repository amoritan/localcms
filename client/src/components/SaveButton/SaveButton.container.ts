import { useSelector, useDispatch } from 'react-redux';

import { getHasUnsavedChanges } from '../../state';
import { saveRequested } from '../../actions/save';
import { State } from '../../state/types';

import SaveButton from './SaveButton';

export interface Props {
  hasUnsavedChanges: boolean;
  onSaveChanges: () => void;
}

const SaveButtonContainer = (): JSX.Element => {
  const hasUnsavedChanges = useSelector((state: State) =>
    getHasUnsavedChanges(state)
  );

  const dispatch = useDispatch();
  const onSaveChanges = () => dispatch(saveRequested());

  return SaveButton({
    hasUnsavedChanges,
    onSaveChanges,
  });
};

export default SaveButtonContainer;
