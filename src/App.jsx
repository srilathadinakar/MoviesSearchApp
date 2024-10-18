import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import MoviesContext from './Pages/MoviesContext';
import Details from './Pages/Details';
import MovieDetails from './Pages/MovieDetails';

const App = () => {
  return (
    <div>
      <MoviesContext>
        <MovieDetails>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='' element={<Home />} />   
              <Route path='/details' element={<Details />} />    
            </Routes>
            <Footer />
          </BrowserRouter>
        </MovieDetails>
      </MoviesContext>
    </div>
  );
};

export default App;