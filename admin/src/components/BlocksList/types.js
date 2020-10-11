import PropTypes from 'prop-types';

export const BlockType = {
  active: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onSelected: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired,
};

export const BlocksListType = {
  data: PropTypes.arrayOf(PropTypes.exact(BlockType)).isRequired,
};
