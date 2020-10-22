import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { sortMovieListBy } from "../../actions";

import "./Filter.scss";

export default function Filter() {
    const SORT_BY_LIST = useSelector((state) => state.filterReducer.sortBy);
    const MOVIE_LIST = useSelector((state) => state.movieListReducer);

    const dispatch = useDispatch();

    return (
        <div className="filter">
            <div className="sortBy">
                <span className="sortBy__title">Sort by</span>
                <select
                    onChange={() =>
                        dispatch(
                            sortMovieListBy(event.target.value, MOVIE_LIST)
                        )
                    }
                >
                    {SORT_BY_LIST.map((item) => (
                        <option key={item.toString()} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
