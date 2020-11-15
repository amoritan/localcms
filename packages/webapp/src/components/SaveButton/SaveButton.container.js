// @flow strict
import { connect } from 'react-redux';

import type { ComponentType } from 'react';

import { getHasUnsavedChanges } from '../../state';

import type { State } from '../../state/types';

import SaveButton from './SaveButton';

type Props = {|
  hasUnsavedChanges: boolean,
|};

const mapStateToProps = (state: State): Props => {
  return {
    hasUnsavedChanges: getHasUnsavedChanges(state),
  };
};

const SaveButtonContainer: ComponentType<Props> = connect(mapStateToProps)(
  SaveButton
);

export default SaveButtonContainer;
