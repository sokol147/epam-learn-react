import { genreReducer } from "./reducers";

describe("genre reducer", () => {
    it("should return the init state", () => {
        expect(genreReducer(undefined, {})).toEqual({
            genreList: [],
            selectedGenre: "",
        });
    });

    it("should set genre list", () => {
        const setListAction = {
            type: "SET_GENRE_LIST",
            payload: ["horror", "comedy"],
        };

        expect(genreReducer({}, setListAction)).toEqual({
            genreList: ["horror", "comedy"],
        });
    });

    it("should set selected genre", () => {
        const setSelectedGenre = {
            type: "SET_SELECTED_GENRE",
            payload: "comedy",
        };

        expect(genreReducer({}, setSelectedGenre)).toEqual({
            selectedGenre: "comedy",
        });
    });
});
