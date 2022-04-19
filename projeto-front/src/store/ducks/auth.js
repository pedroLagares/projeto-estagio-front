import { createAction, createReducer } from '@reduxjs/toolkit' 

const INITIAL_STATE = {
    authenticated: localStorage.getItem('token'),
    user: localStorage.getItem('user')
}

//Actions
export const login = createAction('LOGIN');
export const logout = createAction('LOGOUT');
export default createReducer(INITIAL_STATE, {
    [login.type]: (state, action) => ({...state, authenticated: true, user: action.payload}),
    [logout.type]: (state, action) => ({...state, authenticated: false, user: INITIAL_STATE.user}),
})