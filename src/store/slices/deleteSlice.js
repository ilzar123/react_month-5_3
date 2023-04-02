import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {postSlice} from "./postSlice";

const name = 'delete'
const initialState = {
    post: '',
    status: ''
}

export const deletePost = createAsyncThunk(`${name}/posts`, async (_, {extra: api}) => {
    const {data} = await api.delete('/posts/1')
    return data
})

export const deleteSlice = createSlice({
    name: 'deleteSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(deletePost.pending, (state) => {
                state.status = 'Pending'
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.status = 'Success'
                state.post = 'Postss Succes'
            })
            .addCase(deletePost.rejected, (state, action) => {
                state.status = 'Error'
                state.post = 'Error'
            })
    }
})

export const { reducer: delReducer } = deleteSlice
export const { actions: delActions } = deleteSlice