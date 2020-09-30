import fetch from "cross-fetch";

function requestMovies(sortBy = "") {
    return {
        type: "LOAD_MOVIE_LIST",
        payload: sortBy,
    };
}

function setMovieList(list = []) {
    return {
        type: "SET_MOVIE_LIST",
        payload: list,
    };
}

function deleteMovie(id) {
    return {
        type: "DELETE_MOVIE",
        payload: id,
    };
}

function setSelectedMovie(movie) {
    return {
        type: "SET_SELECTED_MOVIE",
        payload: movie,
    };
}

function updateMovieOnApi(movie) {
    return (dispatch) => {
        dispatch(updateMovie(movie));
        return fetch("http://localhost:4000/movies", {
            method: "PUT",
            body: { movie },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    };
}

function addMovieOnApi(movie) {
    return (dispatch) => {
        dispatch(addMovieToList(movie));
        return fetch("http://localhost:4000/movies", {
            method: "POST",
            body: { movie },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    };
}

function getMovieById(id) {
    return fetch(`http://localhost:4000/movies/:${id}`, { method: "GET" })
        .then((response) => response.json())
        .then((json) => dispatch(setSelectedMovie(json)));
}

function deleteMovieApi(id) {
    return (dispatch) => {
        dispatch(deleteMovie(id));
        return fetch(`http://localhost:4000/movies/:${id}`, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    };
}

function updateMovie(movie) {
    return {
        type: "UPDATE_MOVIE",
        payload: movie,
    };
}

function addMovieToList(movie) {
    return {
        type: "ADD_MOVIE",
        payload: movie,
    };
}

export function fetchMovie(sortBy = "") {
    return (dispatch) => {
        dispatch(requestMovies(sortBy));
        return fetch("http://localhost:4000/movies", { method: "GET", sortBy })
            .then((response) => response.json())
            .then((json) => dispatch(setMovieList(json.data)));
    };
}

export function updateMovieListWithSelectedGenre(genre, movieList) {
    return (dispatch) => {
        const FILTERED_MOVIE_LIST = movieList.filter((movie) => {
            return movie.genres.includes(genre);
        });
        dispatch(setMovieList(FILTERED_MOVIE_LIST));
        return dispatch(setSelectedGenre(genre));
    };
}

export function setGenreList(list) {
    return {
        type: "SET_GENRE_LIST",
        payload: list,
    };
}

export function setSelectedGenre(genre) {
    return {
        type: "SET_SELECTED_GENRE",
        payload: genre,
    };
}

export function sortMovieListBy(sortBy, movieList) {
    return (dispatch) => {
        const SORTED_MOVIE_LIST = movieList.sort((a, b) => {
            if (a[sortBy] < b[sortBy]) {
                return -1;
            }
            if (a[sortBy] > b[sortBy]) {
                return 1;
            }
            return 0;
        });
        dispatch(setMovieList(SORTED_MOVIE_LIST));
        return dispatch(setSelectedSortBy(sortBy));
    };
}

export function setSortByList(list) {
    return {
        type: "SET_SORT_BY_LIST",
        payload: list,
    };
}

export function setSelectedSortBy(sortBy) {
    return {
        type: "SET_SELECTED_SORT_BY",
        payload: sortBy,
    };
}
