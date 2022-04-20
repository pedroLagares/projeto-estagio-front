import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = [];

export const addMusic = createAction('ADD_MUSIC');
export const addMusics = createAction('ADD_MUSICS');

export default createReducer(INITIAL_STATE, {
    [addMusic.type]: (state, action) => [...state, action.payload],
    [addMusics.type]: (state, action) => [...action.payload]
})