import React from "react";
import { useDispatch } from "react-redux";

import { useFormik } from "formik";

import { updateMovieOnApi } from "../../actions";

const validate = (values) => {

    const errors = {};
    if (!values.title) {
        errors.title = "Required";
    } else if (values.title.length > 15) {
        errors.title = "Must be 15 characters or less";
    }
    if (!values.release_date) {
        errors.release_date = "Required";
    }
    if (!values.overview) {
        errors.overview = "Required";
    }
    if (!values.runtime) {
        errors.runtime = "Required";
    } else if (!/[0-9]/.test(values.runtime)) {
        errors.runtime = "Must be number";
    }
    return errors;
};

const EditMovieForm = (props) => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            id: props.movie.id,
            title: props.movie.title,
            release_date: props.movie.release_date,
            url: props.movie.url || "",
            genre: props.movie.genres[0],
            overview: props.movie.overview,
            runtime: props.movie.runtime,
        },
        validate,
        onSubmit: (values) => {
            const movie = {
                id: props.movie.id,
                title: values.title,
                tagline: props.movie.tagline,
                vote_average: props.movie.vote_average,
                vote_count: props.movie.vote_count,
                release_date: values.release_date,
                poster_path: props.movie.poster_path,
                overview: values.overview,
                budget: props.movie.budget,
                revenue: props.movie.revenue,
                genres: [values.genre],
                runtime: values.runTime,
            };

            dispatch(updateMovieOnApi(movie));
        },
    });

    return (
        <form
            className="modal__form form"
            onReset={formik.resetForm}
            onSubmit={formik.handleSubmit}
        >
            <div className="form__field field">
                <label className="field__label">
                    Movie ID
                    <span>{formik.values.id}</span>
                </label>
            </div>
            <div className="form__field field">
                <label className="field__label">
                    Title
                    <input
                        type="text"
                        name="title"
                        value={formik.values.title}
                        placeholder="Title here"
                        className="field__input"
                        onChange={formik.handleChange}
                    ></input>
                </label>
            </div>
            <div className="form__field field">
                <label className="field__label">
                    Release Date
                    <input
                        type="date"
                        className="field__input"
                        name="release_date"
                        value={formik.values.release_date}
                        onChange={formik.handleChange}
                    ></input>
                    {formik.errors.release_date ? (
                        <div>{formik.errors.release_date}</div>
                    ) : null}
                </label>
            </div>
            <div className="form__field field">
                <label className="field__label">
                    Movie URL
                    <input
                        type="text"
                        name="url"
                        value={formik.values.url}
                        placeholder="Movie URL here"
                        className="field__input"
                        onChange={formik.handleChange}
                    ></input>
                </label>
            </div>
            <div className="form__field field">
                <label className="field__label">
                    Genre
                    <select
                        className="field__input"
                        name="genre"
                        value={formik.values.genre}
                        onChange={formik.handleChange}
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
                        name="overview"
                        value={formik.values.overview}
                        onChange={formik.handleChange}
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
                        name="runtime"
                        value={formik.values.runtime}
                        onChange={formik.handleChange}
                        placeholder="runtime here"
                        className="field__input"
                    ></input>
                </label>
            </div>
            <div className="form__control">
                <input
                    type="reset"
                    value="Reset"
                    className="form__button form__button--transparent"
                />
                <input type="submit" value="Save" className="form__button" />
            </div>
        </form>
    );
};

export default EditMovieForm;
