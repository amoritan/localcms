// @flow strict
import React, { useState } from 'react';
import { last, omit } from 'lodash';

import type { Node } from 'react';

import type { ConfigListField } from '../../state/config/types';
import type { FieldId, ListFieldId } from '../../constants/types';

import EditorField from './EditorField';

type Props = {|
  name: FieldId,
  listFields: {
    [ListFieldId]: ConfigListField,
  },
|};

type OwnState = {|
  [string]: {},
|};

const ListField = ({ listFields, name }: Props): Node => {
  const initialState: OwnState = {
    // To be replaced with proper content data;
    1: {},
  };
  const [occurrences, setOcurrences] = useState(initialState);

  const createOccurrence = () => {
    const lastOccurrenceId = last(Object.keys(occurrences));
    const newOccurrenceId = Number(lastOccurrenceId) + 1;
    setOcurrences({
      ...occurrences,
      [newOccurrenceId]: {},
    });
  };

  const deleteOccurrence = (occurrenceId) => {
    setOcurrences(omit(occurrences, occurrenceId));
  };

  const occurrencesElements = Object.keys(occurrences).map((occurrenceId) => {
    const listItemsElements = Object.keys(listFields).map((listFieldId) => {
      const { type: listFieldType } = listFields[listFieldId];
      return (
        <EditorField
          key={`${name}-${listFieldId}-${occurrenceId}`}
          name={listFieldId}
          type={listFieldType}
          htmlId={`${name}-${listFieldId}-${occurrenceId}`}
          fromList
        />
      );
    });

    return (
      <li className="flex items-center" key={`${name}-${occurrenceId}`}>
        <h4 className="text-2xl text-gray-300 mr-2 ml-6 font-mono">
          {occurrenceId}
        </h4>
        <div className="w-full">{listItemsElements}</div>
        <button type="button" onClick={() => deleteOccurrence(occurrenceId)}>
          Delete
        </button>
      </li>
    );
  });

  return (
    <section className="my-8 border-solid border-2 border-gray-200">
      <h3 className="text-xl font-mono bg-gray-200 p-2">{name}</h3>
      <ol>{occurrencesElements}</ol>
      <button type="button" onClick={createOccurrence}>
        Create
      </button>
    </section>
  );
};

export default ListField;
