// @flow strict
import { connect } from 'react-redux';

import type { ComponentType } from 'react';

import { getListFieldOccurrenceIds } from '../../state';
import {
  contentListOccurrenceCreated,
  contentListOccurrenceDeleted,
} from '../../actions/content';
import type { State } from '../../state/types';
import type { ConfigListField } from '../../state/config/types';
import type {
  BlockId,
  FieldId,
  ListOccurrenceId,
  ListFieldId,
} from '../../constants/types';
import type { Dispatch } from '../../actions/types';

import ListField from './ListField';

type OwnProps = {|
  blockId: BlockId,
  fieldId: FieldId,
  listFields: {
    [ListFieldId]: ConfigListField,
  },
|};

type StateProps = {|
  listOccurrenceIds: Array<ListOccurrenceId>,
|};

type DispatchProps = {|
  onListOccurrenceCreated: () => void,
  onListOccurrenceDeleted: (listOccurrenceId: ListOccurrenceId) => void,
|};

const mapStateToProps = (state: State, ownProps: OwnProps): StateProps => {
  return {
    listOccurrenceIds: getListFieldOccurrenceIds(
      state,
      ownProps.blockId,
      ownProps.fieldId
    ),
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch,
  ownProps: OwnProps
): DispatchProps => {
  return {
    onListOccurrenceCreated: () =>
      dispatch(
        contentListOccurrenceCreated(ownProps.blockId, ownProps.fieldId)
      ),
    onListOccurrenceDeleted: (listOccurrenceId: ListOccurrenceId) =>
      dispatch(
        contentListOccurrenceDeleted(
          ownProps.blockId,
          ownProps.fieldId,
          listOccurrenceId
        )
      ),
  };
};

const ListFieldContainer: ComponentType<OwnProps> = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListField);

export default ListFieldContainer;
