import React from 'react';
import PropTypes from 'prop-types';
import { startCase } from 'lodash';

import EditorField from '../EditorField';

const Editor = ({ block }) => {
  const { id, fields } = block;
  const name = startCase(id);

  const fieldElements = Object.values(fields).map((field) => (
    <EditorField key={field.id} {...field} />
  ));

  return (
    <article className="w-full m-4 mb-0">
      <h2 className="text-2xl">{name}</h2>
      <form>{fieldElements}</form>
    </article>
  );
};

Editor.propTypes = {
  block: PropTypes.exact({
    id: PropTypes.string.isRequired,
    fields: PropTypes.object.isRequired,
  }).isRequired,
};

export default Editor;
