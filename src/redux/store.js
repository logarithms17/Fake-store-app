import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import uiReducer from "./UiSlice";     // Default export

const store = configureStore({
  reducer: {
    auth: authReducer, // Auth slice reducer
    ui: uiReducer,     // UI slice reducer
  },
});

export default store;