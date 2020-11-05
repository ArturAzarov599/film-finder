import React, {useEffect, useReducer} from "react";

import './App.css';
import Header from "./components/header/header.component";
import FilmsList from "./components/films-list/films-list.component";
import Search from "./components/search/search.component";
import {filmReducer, INITIAL_STATE} from "./reducer/film/film.reducer";
import {addFilms, changeInputValue} from "./reducer/film/film.actions";
import {FilmsData} from "./films-data/films-data";

function App() {

    const [state, dispatch] = useReducer(filmReducer, INITIAL_STATE)

    useEffect(() => {
        dispatch(addFilms(FilmsData))
    }, [])

    const handleChange = event => {
        dispatch(changeInputValue(event.target.value))
    }

    const filteredMovies = state.films.filter(film => film.name.toLowerCase().includes(state.string))

    return (
        <div className="App">
            <Header/>
            <Search
                placeholder={"find film"}
                handleChange={handleChange}
                value={state.string}
            />
            <FilmsList films={filteredMovies}/>
        </div>
    );
}

export default App;
