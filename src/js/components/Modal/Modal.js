import React from "react";

import "./Modal.scss";

import AddMovieForm from "../AddMovieForm/AddMovieForm";
import EditMovieFrom from "../EditMovieForm/EditMovieForm";
import DeleteMovieForm from "../DeleteMovieForm/DeleteMovieForm";

const Modal = (props) => {
    return (
        <div
            className={
                props.isModalOpen ? "modal display-block" : "modal display-none"
            }
        >
            <section className="modal__main">
                <div className="modal__inner">
                    <span className="modal__header">{props.modalTitle}</span>
                    <button
                        className="modal__closeButton"
                        onClick={props.handelModalClose}
                    >
                        x
                    </button>
                    {props.modalType === "add" ? <AddMovieForm /> : null}
                    {props.modalType === "edit" ? <EditMovieFrom movie={props.movie}/> : null}
                    {props.modalType === "delete" ? (
                        <DeleteMovieForm />
                    ) : null}
                </div>
            </section>
        </div>
    );
};

export default Modal;
