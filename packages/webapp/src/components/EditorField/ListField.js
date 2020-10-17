// @flow strict
import React from 'react';

import type { Node } from 'react';

import type { ConfigListField } from '../../state/config/types';
import type {
  BlockId,
  FieldId,
  ListOccurrenceId,
  ListFieldId,
} from '../../constants/types';

import EditorField from './EditorField.container';

type Props = {|
  blockId: BlockId,
  fieldId: FieldId,
  listFields: {
    [ListFieldId]: ConfigListField,
  },
  listOccurrenceIds: Array<ListOccurrenceId>,
  onListOccurrenceCreated: () => void,
  onListOccurrenceDeleted: (listOccurrenceId: ListOccurrenceId) => void,
|};

const ListField = ({
  blockId,
  fieldId,
  listFields,
  listOccurrenceIds,
  onListOccurrenceCreated,
  onListOccurrenceDeleted,
}: Props): Node => {
  const occurrencesElements = listOccurrenceIds.map((listOccurrenceId) => {
    const listItemsElements = Object.keys(listFields).map((listFieldId) => {
      const { type: listFieldType } = listFields[listFieldId];
      return (
        <EditorField
          key={`${blockId}-${fieldId}-${listOccurrenceId}-${listFieldId}`}
          blockId={blockId}
          fieldId={fieldId}
          type={listFieldType}
          listOccurrenceId={listOccurrenceId}
          listFieldId={listFieldId}
          fromList
        />
      );
    });

    return (
      <li className="flex items-center" key={`${fieldId}-${listOccurrenceId}`}>
        <h4 className="text-2xl text-gray-300 mr-2 ml-6 font-mono">
          {listOccurrenceId}
        </h4>
        <div className="w-full">{listItemsElements}</div>
        <button
          type="button"
          onClick={() => onListOccurrenceDeleted(listOccurrenceId)}
        >
          Delete
        </button>
      </li>
    );
  });

  return (
    <section className="my-8 border-solid border-2 border-gray-200">
      <h3 className="text-xl font-mono bg-gray-200 p-2">{fieldId}</h3>
      <ol>{occurrencesElements}</ol>
      <button type="button" onClick={() => onListOccurrenceCreated()}>
        Create
      </button>
    </section>
  );
};

export default ListField;
