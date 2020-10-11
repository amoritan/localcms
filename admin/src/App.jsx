import React from 'react';

import Header from './components/Header';
import BlocksList from './components/BlocksList';
import Editor from './components/Editor';

const App = () => (
  <div className="flex w-screen h-screen flex-col">
    <Header />
    <main className="flex flex-1 w-full">
      <BlocksList />
      <Editor />
    </main>
  </div>
);

export default App;
