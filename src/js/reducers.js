const { combineReducers } = require("redux");

const SELECTED_MOVIE_DEFAULT = {
    id: 0,
    title: "Default",
    tagline: "",
    vote_average: "",
    vote_count: "",
    release_date: "",
    poster_path:
        "https://underscoremusic.co.uk/site/wp-content/uploads/2014/05/no-poster.jpg",
    overview: "",
    budget: "",
    revenue: "",
    genres: [""],
    runtime: "",
};

function movieListReducer(state = [], action) {
    switch (action.type) {
        case "SET_MOVIE_LIST":
            return [...action.payload];
        case "ADD_MOVIE":
            return [...state, action.payload];
        case "DELETE_MOVIE":
            let deletedMovieIndex;
            state.forEach((item, index) => {
                if (item.id === action.payload) {
                    deletedMovieIndex = index;
                }
            });
            return state.splice(deletedMovieIndex, 1);
        case "EDIT_MOVIE":
            let editedMovieIndex;
            state.forEach((item, index) => {
                if (item.id === action.payload.id) {
                    editedMovieIndex = index;
                }
            });
            let newState = [...state];
            newState[editedMovieIndex] = action.payload;
            return newState;
        default:
            return state;
    }
}

function genreReducer(state = { genreList: [], selectedGenre: "" }, action) {
    switch (action.type) {
        case "SET_GENRE_LIST":
            return {
                ...state,
                genreList: action.payload,
            };
        case "SET_SELECTED_GENRE":
            return {
                ...state,
                selectedGenre: action.payload,
            };
        default:
            return state;
    }
}

function selectedMovieReducer(
    state = { selectedMovie: SELECTED_MOVIE_DEFAULT },
    action
) {
    switch (action.type) {
        case "SET_SELECTED_MOVIE":
            return {
                ...state,
                selectedMovie: action.payload,
            };
        default:
            return state;
    }
}

function filterReducer(state = { sortBy: [], selectedSortBy: "" }, action) {
    switch (action.type) {
        case "SET_SORT_BY_LIST":
            return {
                ...state,
                sortBy: action.payload,
            };
        case "SET_SELECTED_SORT_BY":
            return {
                ...state,
                selectedSortBy: action.payload,
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    movieListReducer,
    genreReducer,
    filterReducer,
    selectedMovieReducer,
});

export default rootReducer;
