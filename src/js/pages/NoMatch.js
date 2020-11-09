import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const NoMatch = (props) => {
    return (
        <>
            <Header handleModalOpen={props.handleModalOpen} />
            <div className="not-found">404</div>
            <Link to="/" className="not-found-link">
                Go Home
            </Link>
            <Footer />
        </>
    );
};

export default NoMatch;
