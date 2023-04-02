import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {postSlice} from "./postSlice";
import axios from "axios";

const name = 'delete'
const initialState = {
    post: '',
    status: ''
}

export const patchPost = createAsyncThunk(`${name}/posts`, async ({body}) => {
    const {data} = await axios.patch('/posts', body)
    return data
})

export const patchSlice = createSlice({
    name: 'deleteSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(patchPost.pending, (state) => {
                state.status = 'Pending'
            })
            .addCase(patchPost.fulfilled, (state, action) => {
                state.status = 'Success'
                state.post = 'Postss Succes'
            })
            .addCase(patchPost.rejected, (state, action) => {
                state.status = 'Error'
                state.post = 'Error'
            })
    }
})

export const { reducer: patchReducer } = patchSlice
export const { actions: patchActions } = patchSlice