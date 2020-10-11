import React from 'react';

import EditorField from '../EditorField';
import { EditorProps } from './types';

const Editor = ({ name, fields }) => {
  const fieldElements = fields.map((fieldProps) => (
    <EditorField key={fieldProps.name} {...fieldProps} />
  ));

  return (
    <article className="w-full m-4 mb-0">
      <h2 className="text-2xl">{name}</h2>
      <form>
        {fieldElements}
      </form>
    </article>
  );
};

Editor.propTypes = EditorProps;

Editor.defaultProps = {
  listItems: null,
};

export default Editor;
