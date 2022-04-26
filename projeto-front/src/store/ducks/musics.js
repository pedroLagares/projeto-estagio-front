import { createAction, createReducer, current } from "@reduxjs/toolkit";

const INITIAL_STATE = [];

export const addMusic = createAction('ADD_MUSIC');
export const updateMusic = createAction('UPDATE_MUSIC');
export const addMusics = createAction('ADD_MUSICS');

export default createReducer(INITIAL_STATE, {
    [addMusic.type]: (state, action) => [...state, action.payload],
    [updateMusic.type]: (state, action) => {
        const currentState = current(state);
        const musicIndex = currentState.findIndex(m => m.id === action.payload.id);
        if ( musicIndex < 0 ) {
            return [...currentState, action.payload];
        }
        else {
            const _state = [...currentState];
            _state[musicIndex] = action.payload;
            return _state;
        }
    },
    [addMusics.type]: (state, action) => [...action.payload]
})