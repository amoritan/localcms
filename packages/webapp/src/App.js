// @flow strict
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import type { Node } from 'react';

import Header from './components/Header';
import BlocksList from './components/BlocksList';
import Editor from './components/Editor';

const App = (): Node => (
  <div className="flex w-screen h-screen flex-col">
    <Header />
    <main className="flex flex-1 w-full">
      <Router>
        <BlocksList />
        <Route path="/block/:blockId" component={Editor} />
      </Router>
    </main>
  </div>
);

export default App;
