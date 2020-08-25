import React from "react";

import "./Main.scss";

import Nav from "../Nav/Nav";
import Filter from "../Filter/Filter";
import FilmList from "../FilmList/FilmList";
import ErrorBoundaryFilmList from '../ErrorBoundaryFilmList/ErrorBoundaryFilmList';

export default function Main() {
    return (
        <main className="main">
            <div className="controls">
                <Nav />
                <Filter />
            </div>
            <ErrorBoundaryFilmList>
                <FilmList />
            </ErrorBoundaryFilmList>
        </main>
    );
}
