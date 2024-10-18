import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { MyMoviesContext } from './MoviesContext';
import { movieDetails } from './MovieDetails';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();
    const[page,setPage] = useState(1);

    const{movies,setMovies} = useContext(MyMoviesContext);
    const{setDetails} = useContext(movieDetails);


    const handleClick = async (Title) => {
        const res = await axios.get(
        `https://www.omdbapi.com/?apikey=f1286296&t=${Title}`
        );
        setDetails(res.data);
        navigate("/details");
    };
    

    useEffect(() => {
        fetchData();
    }, [page]);
    
     const fetchData = async () => {
        try {
            const res = await axios.get(`https://www.omdbapi.com/?apikey=f1286296&page=${page}&s=movie&type=movie`);           
            setMovies((prevMovies) => [...prevMovies, ...res.data.Search]);
        } catch (error) {
            console.log(error); 
        }
    }
    

    return (
        <div className='bg-gray-900 py-16'>
        <div className=' max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center'>
            {
                movies.map((movie,index)=>{
                    return(
                        <div key={index} className='cursor-pointer transition ease-in-out duration-300 hover:translate-y-1 hover:scale-105 '>
                            <div onClick={()=>handleClick(movie.Title)}>
                                <div className='flex justify-center'>
                                <img className='w-4/5 h-3/4 rounded-lg' src={movie.Poster} alt={movie.Title} />
                                </div>
                                <div className=' font-semibold'>
                                    <h2 className='text-lg text-md'>{movie.Title}</h2>
                                    <h3 className=''>{movie.Year}</h3>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </div>
    );
};

export default Home;