// @flow strict
import { connect } from 'react-redux';

import type { ComponentType } from 'react';

import { getHasUnsavedChanges } from '../../state';
import { saveRequested } from '../../actions/save';

import type { State } from '../../state/types';
import type { Dispatch } from '../../actions/types';

import SaveButton from './SaveButton';

type OwnProps = {||};

type StateProps = {|
  hasUnsavedChanges: boolean,
|};

type DispatchProps = {|
  onSaveChanges: () => void,
|};

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

const SaveButtonContainer: ComponentType<OwnProps> = connect(
  mapStateToProps,
  mapDispatchToProps
)(SaveButton);

export default SaveButtonContainer;
