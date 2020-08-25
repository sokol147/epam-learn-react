import React from "react";
import PropTypes from "prop-types";

import "./FilmItem.scss";

export default function FilmItem(props) {
    return (
        <li className="film__item filmCard">
            <div className="filmCard__poster">
                <img src={props.data.poster} className="filmCard__image"></img>
            </div>
            <button className="filmCard__more">:</button>
            <div className="filmCard__info">
                <span className="filmCard__title">{props.data.title}</span>
                <span className="filmCard__year">{props.data.year}</span>
            </div>
            <span className="filmCard__genre">{props.data.genre}</span>
        </li>
    );
}

FilmItem.propTypes = {
    data: PropTypes.shape({
        poster: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
    }),
};
