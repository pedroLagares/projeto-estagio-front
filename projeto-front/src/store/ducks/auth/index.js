import { createAction, createReducer } from '@reduxjs/toolkit' 

const INITIAL_STATE = {
    Authenticated: false
}

//Actions
export const login = createAction('LOGIN');
export const logout = createAction('LOGOUT');
export default createReducer(INITIAL_STATE, {
    [login.type]: (state, action) => ({...state, Authenticated: true}),
    [logout.type]: (state, action) => ({...state, Authenticated: false})
})