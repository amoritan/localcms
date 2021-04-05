import { useSelector, useDispatch } from 'react-redux';

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

import ListField from './ListField';

interface OwnProps {
  blockId: BlockId;
  fieldId: FieldId;
  listFields: Record<ListFieldId, ConfigListField>;
}

export interface Props extends OwnProps {
  listOccurrenceIds: Array<ListOccurrenceId>;
  onListOccurrenceCreated: () => void;
  onListOccurrenceDeleted: (listOccurrenceId: ListOccurrenceId) => void;
}

const ListFieldContainer = (ownProps: OwnProps): JSX.Element => {
  const listOccurrenceIds = useSelector((state: State) =>
    getListFieldOccurrenceIds(state, ownProps.blockId, ownProps.fieldId)
  );

  const dispatch = useDispatch();
  const onListOccurrenceCreated = () =>
    dispatch(contentListOccurrenceCreated(ownProps.blockId, ownProps.fieldId));
  const onListOccurrenceDeleted = (listOccurrenceId: ListOccurrenceId) =>
    dispatch(
      contentListOccurrenceDeleted(
        ownProps.blockId,
        ownProps.fieldId,
        listOccurrenceId
      )
    );

  return ListField({
    ...ownProps,
    listOccurrenceIds,
    onListOccurrenceCreated,
    onListOccurrenceDeleted,
  });
};

export default ListFieldContainer;
