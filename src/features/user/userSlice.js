import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: "Unknown",
};

export const userSlice = createSlice({
    name: "user",
    initialState,

    reducers: {
        changeUserName: (state, action) => {
            state.name = action.payload
        }
    }
})

export const { changeUserName } = userSlice.actions

export const selectUser = (state) => state.user.name

export default userSlice.reducer