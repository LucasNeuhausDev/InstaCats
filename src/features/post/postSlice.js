import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
}

export const getCats = createAsyncThunk(
    "post/getCats",
    async () => {
        const posts = []

        for (let i = 0; i < 10; i++) {
            const uniqueNum = Math.random();

            posts.push({
                user: "Unknown",
                url: `https://cataas.com/cat?uniqueNum=${uniqueNum}`,
                comments: [],
                meows: 0
            })
        }

        return posts
    }
)

export const postSlice = createSlice({
    name: "post",
    initialState,

    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload)
        },

        addComment: (state, action) => {
            state.posts[action.payload.id].comments.push(action.payload.comment)
        },

        addMeow: (state, action) => {
            state.posts[action.payload.id].meows += 1
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(getCats.fulfilled, (state, action) => {
                state.posts = action.payload
            })
    }
})

export const { addPost, addComment, addMeow } = postSlice.actions

export const selectPost = (state) => state.post.posts

export default postSlice.reducer