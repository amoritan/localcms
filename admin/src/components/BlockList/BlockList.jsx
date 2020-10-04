import React from 'react';

import Block from './Block';

const fakeBlocksData = [
  {
    name: 'Header',
    slug: 'header',
    fields: {
      title: 'text',
      into: 'markdown',
    },
  },
  {
    name: 'Gallery',
    slug: 'gallery',
    list: {
      source: 'file',
      alternativeText: 'text',
    },
  },
  {
    name: 'Blog',
    slug: 'blog',
    list: {
      title: 'text',
      photo: 'file',
      content: 'markdown',
    },
  },
];

const blockElements = fakeBlocksData.map(({ name, slug }) => (
  <Block key={slug} name={name} />
));

const BlockList = () => (
  <nav className="w-1/5 bg-gray-200">
    <ul>
      {blockElements}
    </ul>
  </nav>
);

export default BlockList;
