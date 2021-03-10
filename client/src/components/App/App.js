// @flow strict
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import type { Node } from 'react';

import Header from '../Header';
import BlocksList from '../BlocksList';
import Editor from '../Editor';

type Props = {|
  requestConfig: () => void,
|};

const App = ({ requestConfig }: Props): Node => {
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
