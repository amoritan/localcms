import { useSelector, useDispatch } from 'react-redux';

import { getFieldValue, getListFieldValue } from '../../state';
import {
  contentFieldUpdated,
  contentListFieldUpdated,
} from '../../actions/content';
import { State } from '../../state/types';
import {
  BlockId,
  FieldId,
  ListOccurrenceId,
  ListFieldId,
  FieldType,
} from '../../constants/types';

import EditorField from './EditorField';

interface OwnProps {
  blockId: BlockId;
  fieldId: FieldId;
  type: FieldType;
  fromList?: boolean;
  listOccurrenceId?: ListOccurrenceId;
  listFieldId?: ListFieldId;
}

export interface Props extends OwnProps {
  value: string;
  onFieldUpdated: (value: string) => void;
}

const EditorFieldContainer = (ownProps: OwnProps): JSX.Element => {
  let value: string;
  let onFieldUpdated: (value: string) => void;

  const dispatch = useDispatch();

  if (ownProps.fromList && ownProps.listOccurrenceId && ownProps.listFieldId) {
    const { listOccurrenceId, listFieldId } = ownProps;
    value = useSelector((state: State) =>
      getListFieldValue(
        state,
        ownProps.blockId,
        ownProps.fieldId,
        listOccurrenceId,
        listFieldId
      )
    );
    onFieldUpdated = (newValue: string) =>
      dispatch(
        contentListFieldUpdated(
          ownProps.blockId,
          ownProps.fieldId,
          listOccurrenceId,
          listFieldId,
          newValue
        )
      );
  } else {
    value = useSelector((state: State) =>
      getFieldValue(state, ownProps.blockId, ownProps.fieldId)
    );
    onFieldUpdated = (newValue: string) =>
      dispatch(
        contentFieldUpdated(ownProps.blockId, ownProps.fieldId, newValue)
      );
  }

  return EditorField({
    ...ownProps,
    value,
    onFieldUpdated,
  });
};

export default EditorFieldContainer;
