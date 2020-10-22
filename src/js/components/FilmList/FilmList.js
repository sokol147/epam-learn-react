import React from "react";
import FilmItem from "../FilmItem/FilmItem";

import "./FilmList.scss";

export default function FilmList(props) {
    return (
        <>
            <div className="resultsFound">
                {props.movieList.length} movies found
            </div>
            <ul className="film_list">
                {props.movieList.map((filmItem) => (
                    <FilmItem data={filmItem} key={filmItem.title} />
                ))}
            </ul>
        </>
    );
}
