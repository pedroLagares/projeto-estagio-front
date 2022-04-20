import { configureStore } from "@reduxjs/toolkit";
import authReducer from './ducks/auth'
import musicsReducer from './ducks/musics'

export default configureStore({
    reducer: {
        auth: authReducer,
        musics: musicsReducer
    }
})