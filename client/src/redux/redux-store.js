import { configureStore } from "@reduxjs/toolkit";
import postReducer from './postReducer';
import dialogReducer from './dialogReducer';
import datingReducer from "./datingReducer";
import {authReducer} from './authReducer';

const store = configureStore({
    reducer: {
        postState: postReducer,
        dialogState: dialogReducer,
        datingState: datingReducer,
        auth: authReducer 
    }
});

window.store = store

export default store;