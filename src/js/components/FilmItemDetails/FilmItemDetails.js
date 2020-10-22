import React, { useEffect } from "react";

import "./FilmItemDetails.scss";

export default function FilmItemDetails(props) {
    useEffect(() => {
        document.title = props.movie.title;
    });
    return (
        <div className="film-item-details">
            <div className="header__topRow">
                <h1 className="header__title">
                    netflix<span>roulette</span>
                </h1>
                <button className="header__button">search</button>
            </div>
            <div className="film-detail detail">
                <div className="detail__image-wrapper">
                    <img
                        src={props.movie.poster}
                        alt="film poster"
                        className="detail__image"
                    ></img>
                </div>
                <div className="detail__info">
                    <div>
                        <span className="detail__title">
                            {props.movie.title}
                        </span>
                        <span className="detail__rating">
                            {props.movie.rating}
                        </span>
                    </div>
                    <span className="detail__short-info">
                        Oscar winning movie
                    </span>
                    <div>
                        <span className="detail__year">{props.movie.year}</span>
                        <span className="detail__time">
                            {props.movie.runTime} min
                        </span>
                    </div>
                    <p className="detail__description">
                        {props.movie.overview}
                    </p>
                </div>
            </div>
        </div>
    );
}
