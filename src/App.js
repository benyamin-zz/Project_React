import React from 'react';
import { Router } from 'react-router-dom';
import MoonCode from './components/MoonCode';
import history from './utils/history'
function App() {
  return (
    <div >
      <Router history={history}>
        <MoonCode />
      </Router>
    </div>
  );
}

export default App;
