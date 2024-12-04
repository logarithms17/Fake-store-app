import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        password: null,
        loading: false,
        error: null,
        success: false
    },
    reducers: {
        register: (state, action) => {
            state.user = action.payload.username;
            state.password = action.payload.password;
            state.loading = false;
            state.error = null;
            state.success = false;

            localStorage.setItem('user', JSON.stringify(state.user));
            localStorage.setItem('password', JSON.stringify(state.password));
            
        },
        
        login: (state, action) => {
      try {
        const savedUser = JSON.parse(localStorage.getItem("user"));
        const savedPassword = JSON.parse(localStorage.getItem("password"));

        console.log("Payload:", action.payload);
        console.log("Saved User:", savedUser);
          console.log("Saved Password:", savedPassword);
          

        if (
          savedUser === action.payload.username &&
          savedPassword === action.payload.password
        ) {
          state.user = action.payload.username;
          state.password = action.payload.password;
          state.loading = false;
          state.error = null;
            state.success = true;
            localStorage.setItem('success', JSON.stringify(state.success));
        } else {
          state.error = "Invalid username or password";
          state.loading = false;
          state.success = false;
        }
      } catch (error) {
        state.error = "An error occurred during login";
        state.loading = false;
        state.success = false;
        console.error("Login Error:", error);
      }
    },
        logout: (state) => {    
            state.user = null;
            state.password = null;
            state.loading = false;
            state.error = null;
            state.success = false;
            localStorage.removeItem('success');
        },
        },
    
})

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;
    