import React from 'react';

import EditorField from './EditorField.container';
import { Props } from './ListField.container';

const ListField = ({
  blockId,
  fieldId,
  listFields,
  listOccurrenceIds,
  onListOccurrenceCreated,
  onListOccurrenceDeleted,
}: Props): JSX.Element => {
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
