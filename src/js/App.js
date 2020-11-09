import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";

import { fetchMovie, setGenreList, setSortByList } from "./actions";

const GENRE = ["All", "Documentary", "Comedy", "Horror", "Crime", "Adventure"];
const SORT_BY = ["release_date", "vote_average", "title", "vote_count", "budget"];

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const dispatch = useDispatch();
    const MOVIE_LIST = useSelector((state) => state.movieListReducer);
    const GENRE_LIST = useSelector((state) => state.genreReducer.genreList);
    const SORT_BY_LIST = useSelector(
        (state) => state.filterReducer.selectedSortBy
    );
    let SELECTED_MOVIE = useSelector((state) => state.selectedMovieReducer.selectedMovie);

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
        <>
            <Header handleModalOpen={openModal} />
            <Main movieList={MOVIE_LIST} />
            <Footer />
            <Modal
                isModalOpen={isModalOpen}
                modalType="add"
                movie={{}}
                modalTitle="Add movie"
                handelModalClose={hideModal}
            />
        </>
    );
};

export default App;
