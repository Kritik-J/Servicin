import { combineReducers } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import authReducer from "./authSlice";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  ui: uiReducer,
  auth: persistReducer(persistConfig, authReducer)
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
