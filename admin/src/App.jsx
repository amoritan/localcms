import React, { useState } from 'react';

import Header from './components/Header';
import BlocksList from './components/BlocksList';

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

const App = () => {
  const [activeBlock, setActiveBlock] = useState(null);

  const handleBlockSelected = (block) => {
    setActiveBlock(block);
  };

  const blocksData = fakeBlocksData.map(({ name, slug }) => (
    {
      active: activeBlock === slug,
      name,
      onSelected: handleBlockSelected,
      slug,
    }
  ));

  return (
    <div className="flex w-screen h-screen flex-col">
      <Header />
      <main className="flex flex-1 w-full">
        <BlocksList data={blocksData} />
      </main>
    </div>
  );
};

export default App;
