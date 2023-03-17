import { createSlice } from '@reduxjs/toolkit'

type likePostsType = {
    [id: number]: boolean
}

export const initialState: likePostsType = {
    1: true,
    10: true,
    25: true,
}

export const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
        addLike: (state, action) => ({
            ...state,
            [action.payload]: true,
        }),
        removeLike: (state, action) => ({
            ...state,
            [action.payload]: false,
        }),
    },
})

export const { addLike, removeLike } = likeSlice.actions

export default likeSlice.reducer
