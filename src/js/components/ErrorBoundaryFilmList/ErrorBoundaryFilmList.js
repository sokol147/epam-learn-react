import React from "react";

import './ErrorBoundaryFilmList.scss';

export default function ErrorBoundaryFilmList(props) {
    const OOPS_TEXT = () => (
        <div className="film_list--error">Error while search... try another request</div>
    );

    let isEverythingOk = true;

    return <>{isEverythingOk ? props.children : <OOPS_TEXT />}</>;
}
