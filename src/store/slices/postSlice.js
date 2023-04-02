import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const name = 'post'
const initialState = {
    post: 'POST WORK',
    status: '',
    error: ''
}

export const postFetch = createAsyncThunk(
    `${name}/postFetch`,
    async (_,{extra: api},body) => {
        const {data} = await api.post('http://localhost:2000/posts', {body})
        return data
    }
)

export const postFetchV2 = createAsyncThunk(
    `${name}/postFetchV2`,
    async (_, { extra: api }) => {
        const {data} = await api.get('/posts')
        return data
    }
)

export const postSlice = createSlice({
    name,
    initialState,
    reducers: {
        increment: (state, action) => {
            state.post = 'HELLO WORLD'
        },
        decrement: (state, action) => {
            state.post = 'NOT HELLO'
        }
    },
    extraReducers: (builder) => {
        builder.addCase(postFetch.pending, (state, action) => {
            state.status = 'pending'
        })
        builder.addCase(postFetch.fulfilled, (state, action) => {
            console.log(action.payload)
            state.post = action.payload
            state.status = 'success'
        })
        builder.addCase(postFetch.rejected, (state, action) => {
            console.log(action.payload)
            state.error = 'ERROR'
            state.error = 'rejected'
        })

        builder.addCase(postFetchV2.fulfilled, (state, action) => {
            console.log(action.payload)
            state.post = action.payload
            state.status = 'success'
        })
    }
})

export const { reducer: postReducer } = postSlice
export const { actions: postActions } = postSlice