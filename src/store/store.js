import { configureStore } from "@reduxjs/toolkit";
import { api } from "config/requester";
import { postReducer } from "./slices/postSlice";
import { userReducer } from "./slices/userSlice";
import {delReducer} from "./slices/deleteSlice";
import {patchReducer} from "./slices/patchSlice";


export const store = configureStore({
    reducer: {
        user: userReducer,
        post: postReducer,
        delete: delReducer,
        patch: patchReducer
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware({ thunk: { extraArgument: api}}),
})