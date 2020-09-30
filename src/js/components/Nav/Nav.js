import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { updateMovieListWithSelectedGenre } from "../../actions";

import "./Nav.scss";

export default function Nav() {
    const GENRE_LIST = useSelector((state) => state.genreReducer.genreList);
    const MOVIE_LIST = useSelector((state) => state.movieListReducer);
    const dispatch = useDispatch();

    const navItems = GENRE_LIST.map((item) => (
        <li
            className="nav__item"
            key={item.toString()}
            onClick={() =>
                dispatch(updateMovieListWithSelectedGenre(item, MOVIE_LIST))
            }
        >
            {item}
        </li>
    ));

    return <ul className="nav__list">{navItems}</ul>;
}
