import React from "react";
import FilmItem from "../FilmItem/FilmItem";

import "./FilmList.scss";

export default function FilmList() {
    const filmList = [
        {
            title: "film 1",
            year: "2010",
            genre: "Action",
            poster: "../src/img/poster-1.jpg",
        },
        {
            title: "film 2",
            year: "2010",
            genre: "Action",
            poster: "../src/img/poster-2.jpg",
        },
        {
            title: "film 3",
            year: "2010",
            genre: "Action",
            poster: "../src/img/poster-3.jpg",
        },
        {
            title: "film 4",
            year: "2010",
            genre: "Action",
            poster: "../src/img/poster-4.jpg",
        },
        {
            title: "film 5",
            year: "2010",
            genre: "Action",
            poster: "../src/img/poster-5.jpg",
        },
        {
            title: "film 6",
            year: "2010",
            genre: "Action",
            poster: "../src/img/poster-6.jpg",
        },
        {
            title: "film 7",
            year: "2010",
            genre: "Action",
            poster: "../src/img/poster-7.jpg",
        },
    ];

    return (
        <>
            <div className="resultsFound">{filmList.length} movies found</div>
            <ul className="film_list">
                {filmList.map((filmItem) => (
                    <FilmItem data={filmItem} key={filmItem.title} />
                ))}
            </ul>
        </>
    );
}
