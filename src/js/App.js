import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Modal from "./components/Modal/Modal";

import HomePage from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import MovieDetailPage from "./pages/MovieDetailPage";
import SearchPage from "./pages/Search";

import { fetchMovie, setGenreList, setSortByList } from "./actions";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

const GENRE = ["All", "Documentary", "Comedy", "Horror", "Crime", "Adventure"];
const SORT_BY = [
    "release_date",
    "vote_average",
    "title",
    "vote_count",
    "budget",
];

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const dispatch = useDispatch();
    const MOVIE_LIST = useSelector((state) => state.movieListReducer);
    const GENRE_LIST = useSelector((state) => state.genreReducer.genreList);
    const SORT_BY_LIST = useSelector(
        (state) => state.filterReducer.selectedSortBy
    );
    let SELECTED_MOVIE = useSelector(
        (state) => state.selectedMovieReducer.selectedMovie
    );

    useEffect(() => {
        if (!MOVIE_LIST.length) {
            dispatch(fetchMovie());
        }
        if (!SORT_BY_LIST) {
            dispatch(setSortByList(SORT_BY));
        }
        if (!GENRE_LIST.length) {
            dispatch(setGenreList(GENRE));
        }
    }, []);

    function hideModal() {
        setIsModalOpen(false);
    }

    function openModal() {
        setIsModalOpen(true);
    }

    return (
        <Router>
            <Modal
                isModalOpen={isModalOpen}
                modalType="add"
                movie={{}}
                modalTitle="Add movie"
                handelModalClose={hideModal}
            />
            <Switch>
                <Redirect exact from="/" to="/search" />
                <Route path="/search/:searchQuery">
                    <HomePage handleModalOpen={openModal} />
                </Route>
                <Route path="/search">
                    <SearchPage />
                </Route>
                <Route path="/film/:id">
                    <MovieDetailPage handleModalOpen={openModal} />
                </Route>
                <Route path="*">
                    <NoMatch handleModalOpen={openModal} />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
