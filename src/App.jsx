import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './component/Home';
import MovieDetails from './component/MovieDetails';
import './Style/Home.css';
import './Style/MovieDetails.css';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
  );
}

export default App;
