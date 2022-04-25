import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = [];

export const addMusic = createAction('ADD_MUSIC');
export const updateMusic = createAction('UPDATE_MUSIC');
export const addMusics = createAction('ADD_MUSICS');

export default createReducer(INITIAL_STATE, {
    [addMusic.type]: (state, action) => [...state, action.payload],
    [updateMusic.type]: (state, action) => {
            const musicIndex = state.findIndex(m => m.id === action.payload.id);
            if ( musicIndex < 0 ) {
                return [...state, action.payload];
            }
            else {
                return state[musicIndex] = action.payload; 
            }
    },
    [addMusics.type]: (state, action) => [...action.payload]
})