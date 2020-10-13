import React from 'react';
import PropTypes from 'prop-types';

import EditorField from './EditorField';
// import ListField from './ListField';

const EditorFieldWrapper = (props) => {
  const { type } = props;
  if (type === 'list') return null;

  return <EditorField {...props} />;
};

EditorFieldWrapper.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default EditorFieldWrapper;
