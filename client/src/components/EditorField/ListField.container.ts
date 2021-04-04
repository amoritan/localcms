import { connect } from 'react-redux';
import { ComponentType } from 'react';

import { getListFieldOccurrenceIds } from '../../state';
import {
  contentListOccurrenceCreated,
  contentListOccurrenceDeleted,
} from '../../actions/content';
import { State } from '../../state/types';
import { ConfigListField } from '../../state/config/types';
import {
  BlockId,
  FieldId,
  ListOccurrenceId,
  ListFieldId,
} from '../../constants/types';
import { Dispatch } from '../../actions/types';

import ListField from './ListField';

interface OwnProps {
  blockId: BlockId;
  fieldId: FieldId;
  listFields: Record<ListFieldId, ConfigListField>;
}

interface StateProps {
  listOccurrenceIds: Array<ListOccurrenceId>;
}

interface DispatchProps {
  onListOccurrenceCreated: () => void;
  onListOccurrenceDeleted: (listOccurrenceId: ListOccurrenceId) => void;
}

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
