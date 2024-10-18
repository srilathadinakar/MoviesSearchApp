import React, { useContext, useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { MyMoviesContext } from '../Pages/MoviesContext';
import axios from 'axios';

const Navbar = () => {
    const [value,setValue] = useState("");
    const{setMovies} = useContext(MyMoviesContext);
    const navigate = useNavigate();

        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
              const res = await axios.get(
                `https://www.omdbapi.com/?apikey=f1286296&s=${value}`
              );
              if (res.data.Search) {
                setMovies(res.data.Search);
                navigate("/");
              }
            } catch (error) {
              console.log(error);
            }
          };

          useEffect(() => {
            setMovies([]);
          }, []);

    return (
        <nav className='py-10'>
            <div className='max-w-6xl mx-auto flex justify-between items-center'>
                <div className='text-2xl font-bold'>
                    <Link to={"/"}>Movies</Link>
                </div>
                <div>
                    <form className='max-w-md mx-auto relative' onSubmit={handleSubmit}>
                        <input 
                        onChange={(e)=>setValue(e.target.value)}
                        type="search"
                         placeholder='Search for movies...'
                         className='text-black outline-none rounded-md py-3 px-2 pr-8' />
                        {/* <FaSearch className='absolute top-4 right-4 z-10 text-black' /> */}
                        <button
                            type="submit"
                            className="text-white absolute end-2 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;