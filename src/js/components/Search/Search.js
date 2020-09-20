import React from "react";
import PropTypes from "prop-types";

import "./Search.scss";

export default function Search(props) {
    return (
        <div className="search">
            <input
                className="search__input"
                placeholder={props.placeholder || "Type something"}
            ></input>
            <button className="search__button">Search</button>
        </div>
    );
}

Search.propTypes = {
    placeholder: PropTypes.string.isRequired,
};
