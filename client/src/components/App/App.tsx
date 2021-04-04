import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../Header';
import BlocksList from '../BlocksList';
import Editor from '../Editor';

import { Props } from './App.container';

const App = ({ requestConfig }: Props): JSX.Element => {
  useEffect(requestConfig, []);

  return (
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
};

export default App;
