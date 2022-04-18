import { createAction, createReducer } from '@reduxjs/toolkit' 

const INITIAL_STATE = {
    Authenticated: localStorage.getItem('token'),
    user: ''
}

//Actions
export const login = createAction('LOGIN');
export const logout = createAction('LOGOUT');
export default createReducer(INITIAL_STATE, {
    [login.type]: (state, action) => ({...state, Authenticated: true, user: action.payload}),
    [logout.type]: (state, action) => ({...state, Authenticated: false, user: INITIAL_STATE.user}),
})