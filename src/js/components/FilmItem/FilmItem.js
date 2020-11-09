import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import "./FilmItem.scss";

import { setSelectedMovie } from "../../actions";

export default function FilmItem(props) {
    const dispatch = useDispatch();
    return (
        <Link to={`/film/${props.data.id}`}>
            <li
                className="film__item filmCard"
                onClick={() => {
                    dispatch(setSelectedMovie(props.data));
                }}
            >
                <div className="filmCard__poster">
                    <img
                        src={props.data.poster_path || "./img/no-poster.jpg"}
                        className="filmCard__image"
                    ></img>
                </div>
                <button className="filmCard__more">:</button>
                <div className="filmCard__info">
                    <span className="filmCard__title">{props.data.title}</span>
                    <span className="filmCard__year">
                        {props.data.release_date}
                    </span>
                </div>
                <span className="filmCard__genre">{props.data.genres[0]}</span>
            </li>
        </Link>
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
