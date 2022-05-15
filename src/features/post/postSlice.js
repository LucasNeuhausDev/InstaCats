import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
    posts: [],
}

export const getCats = createAsyncThunk(
    "post/getCats",
    async (numberOfPosts) => {
        const posts = []
        for (let i = 0; i < numberOfPosts; i++) {
            const uniqueNum = Math.random();
            posts.push({
                user: "Unknown",
                url: `https://cataas.com/cat?uniqueNum=${uniqueNum}`,
                comments: [],
                meows: 0,
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
        },

        setPostLoaded: (state, action) => {
            state.posts[action.payload.id].isLoaded = true
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(getCats.fulfilled, (state, action) => {
                state.posts = action.payload
            })
    }
})

export const { addPost, addComment, addMeow, setPostLoaded } = postSlice.actions

export const selectPost = (state) => state.post
export const selectIsLoaded = (state) => state.post.posts.every(p => p.isLoaded === true)

export default postSlice.reducer