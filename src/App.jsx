import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
function App() {
  return (
    <Router>
      <div>
        {/* <Route path='/' element={(<Home />)}></Route> */}
        <Home />;
        <Login />;
        <Signup />;
      </div>
    </Router>
    
    

  );

}
export default App;