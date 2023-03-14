
import styles  from './App.module.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import MovieDetails from './pages/MovieDetails.jsx';
import LandingPage from './pages/LandingPage.jsx';


function App () {
    return (
        <Router>
            <header>
            <Link to="/">
                <h1 className={styles.title}>Movies</h1>
            </Link>
            {/*lo que hace es si estoy en otra página y hago click en title Movie me lleva a la principal*/}
            </header>
            <main>
                <Switch>
                    <Route exact path="/movies/:movieId">
                        <MovieDetails />
                    </Route>
                    <Route path="/">
                        <LandingPage />
                    </Route>
                </Switch>
            </main>
        </Router>
    )
}

export default App;