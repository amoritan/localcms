// import { getConfig, getContent } from '../utils/readFiles';

const fakeConfig = {
  blocks: {
    header: {
      fields: {
        title: 'text',
        intro: 'markdown',
        heroImage: 'file',
      },
    },
    blog: {
      fields: {
        title: 'text',
        intro: 'markdown',
        blog: {
          title: 'text',
          photo: 'file',
          content: 'markdown',
        },
      },
    },
  },
};

const initialState = {
  config: fakeConfig,
  content: {},
};

export default initialState;
