import React, { useEffect } from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import MoonCode from './components/MoonCode';
import history from './utils/history'
import loadjs from 'loadjs';

function App() {
  useEffect(() => {
    // loadjs('./assets/js/bootstrap.min.js', function() {
    //   loadjs('./assets/js/bootstrap.min.js', function() {
    //     loadjs('./assets/js/jquery.owl.carousel.min.js',function (){
    //       loadjs('./assets/js/main2.js');
    //     });
    //   });
    // });
  }, [])
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
