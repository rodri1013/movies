import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import get from '../utils/httpClients';
import styles  from './MovieDetails.module.css';

function MovieDetails (){

        const { movieId }= useParams();
        const [isLoading, setIsLoading] = useState(true); 
        const [movie, setMovies]= useState(null);

       

            useEffect(()=> {
            setIsLoading(true);
            get('/movie/'+ movieId).then((data)=> {
                setMovies(data);
                setIsLoading(false);
                });
                },[movieId]);

            if (isLoading) {
            return <Spinner />;
        }


        const imageUrl = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
        return (
            <div className={styles.detailsContainer}>
                <img className={`${styles.col} ${styles.movieImage}`} 
                src={imageUrl} 
                alt={movie.title}
                />
                <div className={`${styles.col} ${styles.movieDetails}`}>
                    <p className={styles.firstItem}>
                    <strong>Title:</strong> {movie.title}
                    </p>
                    <p>
                    <strong>Genres:</strong>{' '}
                    {movie.genres.map(genre => genre.name).join(', ')}
                    {/*convertimos un arreglo de objetos a strings*/}
                    </p>
                    <p>
                    <strong>Description:</strong> {movie.overview}
                    </p>
                </div>
            </div>
    )
}

export default MovieDetails;
