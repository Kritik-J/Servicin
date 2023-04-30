import { combineReducers } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import authReducer from "./authSlice";

const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
