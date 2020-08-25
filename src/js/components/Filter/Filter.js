import React from "react";

import "./Filter.scss";

export default function Filter() {
    const options = ["release date", "rating"];
    return (
        <div className="filter">
            <div className="sortBy">
                <span className="sortBy__title">Sort by</span>
                <select>
                    {options.map((item) => (
                        <option key={item.toString()} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
