import React from 'react';
import { startCase } from 'lodash';

import { ConfigBlock } from '../../state/config/types';
import EditorField from '../EditorField';

interface Props {
  block: ConfigBlock | null;
}

const Editor = ({ block }: Props): JSX.Element => {
  if (!block) return null;

  const { id, fields } = block;
  const name = startCase(id);

  const fieldElements = Object.keys(fields).map((fieldId) => {
    const field = fields[fieldId];
    return <EditorField key={fieldId} blockId={id} fieldConfig={field} />;
  });

  return (
    <article className="w-full m-4 mb-0">
      <h2 className="text-2xl">{name}</h2>
      <form>{fieldElements}</form>
    </article>
  );
};

export default Editor;
