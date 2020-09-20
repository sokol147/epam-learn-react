import React from "react";

import "./Header.scss";

import Search from "../Search/Search";

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header__inner">
                    <div className="header__topRow">
                        <h1 className="header__title">
                            netflix<span>roulette</span>
                        </h1>
                        <button className="header__button">+ Add Movie</button>
                    </div>

                    <div className="callToAction">
                        <span className="callToAction__text">
                            Find Your Movie
                        </span>
                    </div>
                    <Search placeholder="What do you want to watch?" />
                </div>
            </div>
        );
    }
}
