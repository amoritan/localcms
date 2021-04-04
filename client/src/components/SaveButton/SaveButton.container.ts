import { connect } from 'react-redux';
import { ComponentType } from 'react';

import { getHasUnsavedChanges } from '../../state';
import { saveRequested } from '../../actions/save';
import { State } from '../../state/types';
import { Dispatch } from '../../actions/types';

import SaveButton from './SaveButton';

interface StateProps {
  hasUnsavedChanges: boolean;
}

interface DispatchProps {
  onSaveChanges: () => void;
}

const mapStateToProps = (state: State): StateProps => {
  return {
    hasUnsavedChanges: getHasUnsavedChanges(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onSaveChanges: () => {
    dispatch(saveRequested());
  },
});

const SaveButtonContainer: ComponentType = connect(
  mapStateToProps,
  mapDispatchToProps
)(SaveButton);

export default SaveButtonContainer;
