import React from "react";

import "./Modal.scss";

export default class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movieId: this.props.movie.id || "",
            movieTitle: this.props.movie.title || "",
            movieReleaseDate: this.props.movie.releaseDate || "",
            movieUrl: this.props.movie.url || "",
            movieGenre: this.props.movie.genre || "",
            movieOverview: this.props.movie.overview || "",
            movieRunTime: this.props.movie.runTime || "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        // lift state to parent component
    }

    handleReset(event) {
        event.preventDefault();
        this.setState({
            movieId: "",
            movieTitle: "",
            movieReleaseDate: "",
            movieUrl: "",
            movieGenre: "",
            movieOverview: "",
            movieRunTime: "",
        });
    }

    handleDelete(event) {
        event.preventDefault();
    }

    handleSave(event) {
        event.preventDefault();
    }

    render() {
        const MOVIE_ID =
            this.props.modalType === "edit" ? (
                <div className="form__field field">
                    <label className="field__label">
                        Movie ID
                        <span>{this.state.movieId}</span>
                    </label>
                </div>
            ) : null;

        const DELETE_INFO_TEXT =
            this.props.modalType === "delete" ? (
                <div>Are you sure you want to delete this movie?</div>
            ) : null;

        const DELETE_BUTTON =
            this.props.modalType === "delete" ? (
                <input
                    type="button"
                    value="Confirm"
                    className="form__button"
                    onClick={this.handleDelete}
                />
            ) : null;

        const RESET_BUTTON =
            this.props.modalTitle !== "delete" ? (
                <input
                    type="reset"
                    value="Reset"
                    className="form__button form__button--transparent"
                />
            ) : null;

        const SUBMIT_BUTTON =
            this.props.modalType === "add" ? (
                <input type="submit" value="Submit" className="form__button" />
            ) : null;

        const SAVE_BUTTON =
            this.props.modalType === "edit" ? (
                <input
                    type="button"
                    value="Save"
                    className="form__button"
                    onClick={this.handleSave}
                />
            ) : null;

        const FORM_FIELDS =
            this.props.modalType !== "delete" ? (
                <>
                    {MOVIE_ID}
                    <div className="form__field field">
                        <label className="field__label">
                            Title
                            <input
                                type="text"
                                name="movieTitle"
                                value={this.state.movieTitle}
                                placeholder="Title here"
                                className="field__input"
                                onChange={this.handleChange}
                            ></input>
                        </label>
                    </div>
                    <div className="form__field field">
                        <label className="field__label">
                            Release Date
                            <input
                                type="date"
                                className="field__input"
                                name="movieReleaseDate"
                                value={this.state.movieReleaseDate}
                                onChange={this.handleChange}
                            ></input>
                        </label>
                    </div>
                    <div className="form__field field">
                        <label className="field__label">
                            Movie URL
                            <input
                                type="text"
                                name="movieUrl"
                                value={this.state.movieUrl}
                                placeholder="Movie URL here"
                                className="field__input"
                                onChange={this.handleChange}
                            ></input>
                        </label>
                    </div>
                    <div className="form__field field">
                        <label className="field__label">
                            Genre
                            <select
                                className="field__input"
                                name="movieGenre"
                                value={this.state.value}
                                onChange={this.handleChange}
                            >
                                <option value="comedy">Comedy</option>
                                <option value="action">Action</option>
                            </select>
                        </label>
                    </div>
                    <div className="form__field field">
                        <label className="field__label">
                            Overview
                            <input
                                type="text"
                                name="movieOverView"
                                value={this.state.movieOverview}
                                onChange={this.handleChange}
                                placeholder="Overview here"
                                className="field__input"
                            ></input>
                        </label>
                    </div>
                    <div className="form__field field">
                        <label className="field__label">
                            Runtime
                            <input
                                type="text"
                                name="movieRunTime"
                                value={this.state.movieRunTime}
                                onChange={this.handleChange}
                                placeholder="runtime here"
                                className="field__input"
                            ></input>
                        </label>
                    </div>
                </>
            ) : (
                DELETE_INFO_TEXT
            );

        return (
            <div
                className={
                    this.props.isModalOpen
                        ? "modal display-block"
                        : "modal display-none"
                }
            >
                <section className="modal__main">
                    <div className="modal__inner">
                        <span className="modal__header">
                            {this.props.modalTitle}
                        </span>
                        <button
                            className="modal__closeButton"
                            onClick={this.props.handelModalClose}
                        >
                            x
                        </button>
                        <form
                            className="modal__form form"
                            onSubmit={this.handleSubmit}
                            onReset={this.handleReset}
                        >
                            {FORM_FIELDS}
                            <div className="form__control">
                                {RESET_BUTTON}
                                {SUBMIT_BUTTON}
                                {SAVE_BUTTON}
                                {DELETE_BUTTON}
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        );
    }
}
