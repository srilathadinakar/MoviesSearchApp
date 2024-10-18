import React, { createContext, useState } from 'react';

export const MyMoviesContext = createContext();

const MoviesContext = ({children}) => {
    const [movies,setMovies] = useState([]);
    return (
        <MyMoviesContext.Provider value={{movies,setMovies}}>
            {children}
        </MyMoviesContext.Provider>
    );
};

export default MoviesContext;