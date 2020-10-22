import React from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.hideModal = this.hideModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.state = {
            isModalOpen: false,
        };

        this.movieList = [
            {
                id: "1",
                title: "film 1",
                releaseDate: "2020-07-22",
                url: "kinopoisk/action/1",
                year: "2010",
                genre: "action",
                overview: "",
                runTime: "127",
                poster: "../src/img/poster-1.jpg",
            },
            {
                id: "2",
                title: "film 2",
                releaseDate: "2020-07-22",
                url: "kinopoisk/action/1",
                year: "2010",
                genre: "action",
                overview: "",
                runTime: "127",
                poster: "../src/img/poster-2.jpg",
            },
            {
                id: "3",
                title: "film 3",
                releaseDate: "2020-07-22",
                url: "kinopoisk/action/1",
                year: "2010",
                genre: "action",
                overview: "",
                runTime: "127",
                poster: "../src/img/poster-3.jpg",
            },
            {
                id: "4",
                title: "film 4",
                releaseDate: "2020-07-22",
                url: "kinopoisk/action/1",
                year: "2010",
                genre: "action",
                overview: "",
                runTime: "127",
                poster: "../src/img/poster-4.jpg",
            },
            {
                id: "5",
                title: "film 5",
                releaseDate: "2020-07-22",
                url: "kinopoisk/action/1",
                year: "2010",
                genre: "action",
                overview: "",
                runTime: "127",
                poster: "../src/img/poster-5.jpg",
            },
            {
                id: "6",
                title: "film 6",
                releaseDate: "2020-07-22",
                url: "kinopoisk/action/1",
                year: "2010",
                genre: "action",
                overview: "",
                runTime: "127",
                poster: "../src/img/poster-6.jpg",
            },
            {
                id: "7",
                title: "film 7",
                releaseDate: "2020-07-22",
                url: "kinopoisk/action/1",
                year: "2010",
                genre: "action",
                overview: "",
                runTime: "127",
                poster: "../src/img/poster-7.jpg",
            },
        ];
    }

    hideModal() {
        this.setState({
            isModalOpen: false,
        });
    }

    openModal() {
        this.setState({
            isModalOpen: true,
        });
    }

    render() {
        return (
            <>
                <Header handleModalOpen={this.openModal} />
                <Main movieList={this.movieList} />
                <Footer />
                <Modal
                    isModalOpen={this.state.isModalOpen}
                    modalType="add"
                    movie={{}}
                    modalTitle="Add movie"
                    handelModalClose={this.hideModal}
                />
            </>
        );
    }
}
