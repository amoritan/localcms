import React, { useState } from 'react';

import Header from './components/Header';
import BlocksList from './components/BlocksList';
import Editor from './components/Editor';

const fakeBlocksData = [
  {
    name: 'Header',
    slug: 'header',
    fields: {
      title: 'text',
      intro: 'markdown',
      preview: 'file',
    },
  },
  {
    name: 'Gallery',
    slug: 'gallery',
    fields: {
      gallery: {
        source: 'file',
        alternativeText: 'text',
      },
    },
  },
  {
    name: 'Blog',
    slug: 'blog',
    fields: {
      blog: {
        title: 'text',
        photo: 'file',
        content: 'markdown',
      },
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

  const activeBlockConfig = fakeBlocksData.find(({ slug }) => (activeBlock === slug));

  return (
    <div className="flex w-screen h-screen flex-col">
      <Header />
      <main className="flex flex-1 w-full">
        <BlocksList data={blocksData} />
        <Editor config={activeBlockConfig} />
      </main>
    </div>
  );
};

export default App;
