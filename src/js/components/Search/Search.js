import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import PropTypes from "prop-types";

import { fetchMovie } from "../../actions";

import "./Search.scss";

export default function Search(props) {
    let history = useHistory();
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch(fetchMovie({search: search}));
        history.push(`/search/${search}`);
    };

    return (
        <form className="search" onSubmit={handleSubmit}>
            <input
                className="search__input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={props.placeholder || "Type something"}
            ></input>
            <input
                type="submit"
                value="Search"
                className="search__button"
            ></input>
        </form>
    );
}

Search.propTypes = {
    placeholder: PropTypes.string.isRequired,
};
