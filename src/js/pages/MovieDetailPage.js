import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FilmItemDetails from "../components/FilmItemDetails/FilmItemDetails";

const MovieDetailPage = (props) => {
    let { id } = useParams();
    const MOVIE_LIST = useSelector((state) => state.movieListReducer);
    let movie = MOVIE_LIST.find((movie) => movie.id === Number(id));
    return (
        <>
            <Header handleModalOpen={props.handleModalOpen} />
            <FilmItemDetails movie={movie} />
            <Footer />
        </>
    );
};

export default MovieDetailPage;
