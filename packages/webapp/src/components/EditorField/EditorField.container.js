// @flow strict
import { connect } from 'react-redux';

import type { ComponentType } from 'react';

import { getFieldValue, getListFieldValue } from '../../state';
import {
  contentFieldUpdated,
  contentListFieldUpdated,
} from '../../actions/content';
import type { State } from '../../state/types';
import type {
  BlockId,
  FieldId,
  ListOccurrenceId,
  ListFieldId,
  FieldType,
} from '../../constants/types';
import type { Dispatch } from '../../actions/types';

import EditorField from './EditorField';

type OwnProps = {|
  blockId: BlockId,
  fieldId: FieldId,
  type: FieldType,
  fromList?: boolean,
  listOccurrenceId?: ListOccurrenceId,
  listFieldId?: ListFieldId,
|};

type StateProps = {|
  value: string,
|};

type DispatchProps = {|
  onFieldUpdated: (value: string) => void,
|};

const mapStateToProps = (state: State, ownProps: OwnProps): StateProps => {
  if (ownProps.fromList && ownProps.listOccurrenceId && ownProps.listFieldId) {
    const { blockId, fieldId, listOccurrenceId, listFieldId } = ownProps;
    return {
      value: getListFieldValue(
        state,
        blockId,
        fieldId,
        listOccurrenceId,
        listFieldId
      ),
    };
  }

  return {
    value: getFieldValue(state, ownProps.blockId, ownProps.fieldId),
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch,
  ownProps: OwnProps
): DispatchProps => {
  if (ownProps.fromList && ownProps.listOccurrenceId && ownProps.listFieldId) {
    const { blockId, fieldId, listOccurrenceId, listFieldId } = ownProps;
    return {
      onFieldUpdated: (value: string) =>
        dispatch(
          contentListFieldUpdated(
            blockId,
            fieldId,
            listOccurrenceId,
            listFieldId,
            value
          )
        ),
    };
  }

  return {
    onFieldUpdated: (value: string) =>
      dispatch(contentFieldUpdated(ownProps.blockId, ownProps.fieldId, value)),
  };
};

const EditorFieldContainer: ComponentType<OwnProps> = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditorField);

export default EditorFieldContainer;
