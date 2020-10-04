import React from 'react';

import Header from './components/Header';
import BlockList from './components/BlockList';

const App = () => (
  <div className="flex w-screen h-screen flex-col">
    <Header />
    <main className="flex flex-1 w-full">
      <BlockList />
    </main>
  </div>
);

export default App;
