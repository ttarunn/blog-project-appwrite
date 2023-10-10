import { createSlice } from "@reduxjs/toolkit";



const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        status:false,
        userData: null
    },
    reducers: {
        login: (state, action) => {
            state.status = true,
            state.userData = action.payload.userData
        },
        logout: (state, action) => {
            state.status = false,
            state.userData = null
        }
    }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;