import React from "react";
import { useDispatch } from "react-redux";

import { useFormik } from "formik";

import { addMovieOnApi } from "../../actions";

const validate = (values) => {
    const errors = {};
    if (!values.title) {
        errors.title = "Required";
    } else if (values.title.length > 15) {
        errors.title = "Must be 15 characters or less";
    }
    if (!values.releaseDate) {
        errors.releaseDate = "Required";
    }
    if (!values.overview) {
        errors.overview = "Required";
    }
    if (!values.runTime) {
        errors.runTime = "Required";
    } else if (!/[0-9]/.test(values.runTime)) {
        errors.runTime = "Must be number";
    }
    return errors;
};

const AddMovieForm = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            title: "",
            releaseDate: "",
            url: "",
            genre: "",
            overview: "",
            runTime: "",
        },
        validate,
        onSubmit: (values) => {
            const ID = Math.random() * 10000;
            const movie = {
                id: ID,
                title: values.title,
                tagline: "",
                vote_average: "",
                vote_count: "",
                release_date: values.releaseDate,
                poster_path:
                    "https://underscoremusic.co.uk/site/wp-content/uploads/2014/05/no-poster.jpg",
                overview: values.overview,
                budget: "",
                revenue: "",
                genres: [values.genre],
                runtime: values.runTime,
            };
            dispatch(addMovieOnApi(movie));
            formik.resetForm();
        },
    });

    return (
        <form
            className="modal__form form"
            onSubmit={formik.handleSubmit}
            onReset={formik.resetForm}
        >
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
                    {formik.errors.title ? (
                        <div>{formik.errors.title}</div>
                    ) : null}
                </label>
            </div>
            <div className="form__field field">
                <label className="field__label">
                    Release Date
                    <input
                        type="date"
                        className="field__input"
                        name="releaseDate"
                        value={formik.values.releaseDate}
                        onChange={formik.handleChange}
                    ></input>
                    {formik.errors.releaseDate ? (
                        <div>{formik.errors.releaseDate}</div>
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
                    {formik.errors.overview ? (
                        <div>{formik.errors.overview}</div>
                    ) : null}
                </label>
            </div>
            <div className="form__field field">
                <label className="field__label">
                    Runtime
                    <input
                        type="text"
                        name="runTime"
                        value={formik.values.runTime}
                        onChange={formik.handleChange}
                        placeholder="runtime here"
                        className="field__input"
                    ></input>
                    {formik.errors.runTime ? (
                        <div>{formik.errors.runTime}</div>
                    ) : null}
                </label>
            </div>
            <div className="form__control">
                <input
                    type="reset"
                    value="Reset"
                    className="form__button form__button--transparent"
                />
                <input type="submit" value="Submit" className="form__button" />
            </div>
        </form>
    );
};

export default AddMovieForm;
