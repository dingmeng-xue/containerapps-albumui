import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Albumlist from './Albumlist';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="*" element={<Albumlist/>} />
      </Routes>
    </Router>
  );
}
export default App;