import React from "react";

import "./Nav.scss";

export default function Nav() {
    const genres = ["All", "Documentary", "Comedy", "Horror", "Crime"];

    const navItems = genres.map((item) => (
        <li className="nav__item" key={item.toString()}>
            {item}
        </li>
    ));

    return <ul className="nav__list">{navItems}</ul>;
}
