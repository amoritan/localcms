import PropTypes from 'prop-types';

export const FIELD_TYPE_TEXT = 'text';
export const FIELD_TYPE_MARKDOWN = 'markdown';
export const FIELD_TYPE_FILE = 'file';
export const FIELD_TYPE_LIST = 'list';

export const FieldTypeConfig = PropTypes.oneOf([
  FIELD_TYPE_TEXT,
  FIELD_TYPE_MARKDOWN,
  FIELD_TYPE_FILE,
]);
export const ListFieldConfig = PropTypes.objectOf(FieldTypeConfig);
export const FieldConfig = PropTypes.oneOfType([FieldTypeConfig, ListFieldConfig]);

export const EditorConfig = PropTypes.exact({
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  fields: PropTypes.objectOf(FieldConfig).isRequired,
});
export const EditorContainerProps = {
  config: EditorConfig,
};

export const FieldType = PropTypes.oneOf([
  FIELD_TYPE_TEXT,
  FIELD_TYPE_MARKDOWN,
  FIELD_TYPE_FILE,
  FIELD_TYPE_LIST,
]);
export const ListItem = PropTypes.exact({
  fieldName: PropTypes.string.isRequired,
  fieldType: FieldTypeConfig.isRequired,
});

export const FieldShape = PropTypes.exact({
  fieldName: PropTypes.string.isRequired,
  fieldType: FieldType.isRequired,
  listItems: PropTypes.arrayOf(ListItem),
});

export const EditorProps = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(FieldShape),
};
