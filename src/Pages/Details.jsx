import React, { useContext } from 'react';
import { movieDetails } from './MovieDetails';

const Details = () => {
    const {details} = useContext(movieDetails);
    return (
        <div className='max-w-3xl mx-auto flex justify-between gap-8 my-10'>
            <div className='w-11/12 rounded-md'>
                <img className='rounded-md' src={details.Poster} alt={details.Title} />
            </div>
            
            <div className='flex flex-col gap-2'>
                <h2 className="font-bold text-2xl">{details.Title}</h2>
                <p className='text-lg'><span className='font-semibold'>Year :</span> {details.Year}</p>
                <p className='text-lg'><span className='font-semibold'>Rated :</span> {details.Rated}</p>
                <p className='text-lg'><span className='font-semibold'>Released :</span> {details.Released}</p>
                <p className='text-lg'><span className='font-semibold'>Runtime :</span> {details.Runtime}</p>
                <p className='text-lg'><span className='font-semibold'>Genre :</span> {details.Genre}</p>
                <p className='text-lg'><span className='font-semibold'>Director :</span> {details.Director}</p>
                <p className='text-lg'><span className='font-semibold'>Writer :</span> {details.Writer}</p>
                <p className='text-lg'><span className='font-semibold'>Actors :</span> {details.Actors}</p>
                <p className='text-lg'><span className='font-semibold'>Plot :</span> {details.Plot}</p>
                <p className='text-lg'><span className='font-semibold'>Language :</span> {details.Language}</p>
                <p className='text-lg'><span className='font-semibold'>Country :</span> {details.Country}</p>
                <p className='text-lg'><span className='font-semibold'>Awards :</span> {details.Awards}</p>
            </div>
        </div>
    );
};

export default Details;
