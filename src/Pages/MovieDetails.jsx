import React, { createContext, useState } from 'react';

export const movieDetails = createContext();

const MovieDetails = ({children}) => {
    const[details,setDetails] = useState(null);
    return (
        <movieDetails.Provider value={{details,setDetails}}>
            {children}
        </movieDetails.Provider>
    );
};

export default MovieDetails;