import React from "react";
import PropTypes from "prop-types";

import "./FilmItem.scss";

export default function FilmItem(props) {
    return (
        <li className="film__item filmCard">
            <div className="filmCard__poster">
                <img src={props.data.poster_path} className="filmCard__image"></img>
            </div>
            <button className="filmCard__more">:</button>
            <div className="filmCard__info">
                <span className="filmCard__title">{props.data.title}</span>
                <span className="filmCard__year">{props.data.release_date}</span>
            </div>
            <span className="filmCard__genre">{props.data.genres[0]}</span>
        </li>
    );
}

FilmItem.propTypes = {
    data: PropTypes.shape({
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        genres: PropTypes.array.isRequired,
    }),
};
