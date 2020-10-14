// @flow strict
const fakeConfig = {
  blocks: {
    header: {
      id: 'header',
      fields: {
        title: {
          id: 'title',
          type: 'text',
        },
        intro: {
          id: 'intro',
          type: 'markdown',
        },
        heroImage: {
          id: 'heroImage',
          type: 'file',
        },
      },
    },
    blog: {
      id: 'blog',
      fields: {
        title: {
          id: 'title',
          type: 'text',
        },
        intro: {
          id: 'intro',
          type: 'markdown',
        },
        blog: {
          id: 'blog',
          type: 'list',
          listFields: {
            title: {
              id: 'title',
              type: 'text',
            },
            content: {
              id: 'content',
              type: 'markdown',
            },
            photo: {
              id: 'photo',
              type: 'file',
            },
          },
        },
      },
    },
  },
};

const initialState = fakeConfig; // TODO: Fetch from file reading logic

export default initialState;
