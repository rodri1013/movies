import { useState } from 'react';
import { useEffect } from 'react';
import get from '../utils/httpClients';
import { useQuery } from './hooks/useQuery';
import MovieCard from './MovieCard';
import styles  from './MoviesGrid.module.css';
import Spinner from './Spinner';



function MoviesGrid(){

    //let Movies = [];
    const[ movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    //const Movies = MoviesState[0]
    //const setMovies = MoviesState[1] lo mismo que lo de abajo
    //const [Movies, setMovies]= MoviesState

    const query = useQuery();
    const search = query.get('search');

    useEffect(()=> {
        setIsLoading(true);
        const searchUrl = search
        ? '/search/movie?query=' + search
        : '/discover/movie';
        get(searchUrl)
        .then((data) => {
        setMovies(data.results);
        setIsLoading(false);
        })
    },[search])//este arreglo vacío hace que el useEffect se ejecute una sola vez
    // al pasarle [search] el UseEffect se ejecuta la primera vez y cada vez que se hace un search
    if(isLoading){
        return <Spinner />;
    }
    
    return (
        <ul className={styles.MoviesGrid}>
           {movies.map((movie)=> (
            <MovieCard key={movie.id} movie={movie}/>
             ))}
        </ul>
    )
}

// nos traemos el Movies.json y con el map nss retornamos c/u de as pelis en un array. 

export default MoviesGrid;