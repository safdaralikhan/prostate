import React from 'react';
// import 'react-overlay-loader/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Home1 from './pages/Home1';


function App() {
  return (
    <>
      <ToastContainer />
   
    <Router>
    <Routes>
      <Route exact path="/" element={<Home1/>}></Route>
     


    </Routes>
  </Router>
  </>
  );
}

export default App;
