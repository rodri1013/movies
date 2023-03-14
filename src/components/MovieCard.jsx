import styles  from './MovieCard.module.css';
import { Link } from 'react-router-dom';


function MovieCard ({movie})  {

    const imageUrl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;

    return (
        <li className={styles.MovieCard}>
            <Link to={"/movies/" + movie.id}>
        <img 
        width={230}
        height={345}
        className={styles.movieImage} 
        src={imageUrl} 
        alt={movie.title} 
        />
        <div>{movie.title}</div>
            </Link>
        </li>
    )
}
//div del movie.title hace que el título vaya abajo
export default MovieCard;