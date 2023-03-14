import styles from './Search.module.css';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from './hooks/useQuery';
import { useEffect } from 'react';

function Search() {
   const query = useQuery();
  const search = query.get('search');

  const [searchText, setSearchText] = useState('');//lo construimos para ver el texto que se ingresa en el input
  const history = useHistory();


   useEffect(() => {
     setSearchText(search || '');
   }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();// cancela la recarga por defecto que hacen los form
    history.push('/?search=' + searchText);//permite buscar una peli y llevarnos al rdo de búsqueda en la URL 
  };//le decimos a e que tome lo que le manda handleSubmit y no recargue

  return ( 
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input 
          className={styles.searchInput} 
          type='text' 
          value={searchText} 
          onChange={(e)=> setSearchText(e.target.value.toLowerCase)}/>
          {/*controlamos el value del input y sus cambios, también escribimos en min y lo pasa a may si hacemos.toUppercase() */}
        <button className={styles.searchButton} type='submit'>
        <FaSearch  size={20}/>
        </button>
      </div>
    </form>
    );
}

export default Search;
// botón al estar dentro de un formulario funciona con un click o enter
//action va a a ser onSubmit={} => al hacer click va a ir a buscar la peli
// en los form se maneja a través del onSubmit 
//por defecto los form recargan toda la página
//value={searchText} toma el valor del input
//onChange={()=> setSearchText} es la función que va a tomar los cambios en los estados