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
  const value = useSelector((state: State) => {
    if (
      ownProps.fromList &&
      ownProps.listOccurrenceId &&
      ownProps.listFieldId
    ) {
      const { blockId, fieldId, listOccurrenceId, listFieldId } = ownProps;
      return getListFieldValue(
        state,
        blockId,
        fieldId,
        listOccurrenceId,
        listFieldId
      );
    }

    return getFieldValue(state, ownProps.blockId, ownProps.fieldId);
  });

  const dispatch = useDispatch();
  const onFieldUpdated = () => {
    if (
      ownProps.fromList &&
      ownProps.listOccurrenceId &&
      ownProps.listFieldId
    ) {
      const { blockId, fieldId, listOccurrenceId, listFieldId } = ownProps;
      return (value: string) =>
        dispatch(
          contentListFieldUpdated(
            blockId,
            fieldId,
            listOccurrenceId,
            listFieldId,
            value
          )
        );
    }

    return (value: string) =>
      dispatch(contentFieldUpdated(ownProps.blockId, ownProps.fieldId, value));
  };

  return EditorField({
    ...ownProps,
    value,
    onFieldUpdated,
  });
};

export default EditorFieldContainer;
