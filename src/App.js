import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import MoonCode from './components/MoonCode';
import history from './utils/history'
function App() {

  return (
    <div >
      <Router history={history}>
        <MoonCode />
        <ToastContainer />

      </Router>
    </div>
  );
}

export default App;
