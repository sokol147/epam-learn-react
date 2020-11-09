import React from "react";
import { useSelector } from "react-redux";

import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

const HomePage = (props) => {
    const MOVIE_LIST = useSelector((state) => state.movieListReducer);
    return (
        <>
            <Header handleModalOpen={props.handleModalOpen} />
            <Main movieList={MOVIE_LIST} />
            <Footer />
        </>
    );
};

export default HomePage;
