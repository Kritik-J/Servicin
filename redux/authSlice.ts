import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { IUser } from "../types";

type InitialState = {
  user: IUser | null;
  isAuth: boolean;
  isLoading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  user: null,
  isAuth: false,
  isLoading: false,
  error: null,
};

export const userRegister = createAsyncThunk(
  "auth/register",
  async (
    userData: {
      displayName: string;
      email: string;
      password: string;
    },
    thunkAPI
  ) => {
    try {
      const { displayName, email, password } = userData;

      if(!displayName || !email || !password || !displayName.trim() || !email.trim() || !password.trim()) {
        throw new Error("Please fill all fields");
      }

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (!userCredential.user) {
        throw new Error("User not found");
      }

      const userRef = await doc(db, "users", `${userCredential.user.uid}`);

      await setDoc(userRef, {
        displayName,
        email: userCredential.user.email,
        role: "user",
        photoURL: `https://api.dicebear.com/6.x/fun-emoji/svg?seed=${displayName.trim()}-${
          userCredential.user.email
        }`,
      });

      const user = await getDoc(userRef);

      return user.data() as IUser;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error)?.message as string);
    }
  }
);

export const userLogin = createAsyncThunk(
  "auth/login",
  async (
    userData: {
      email: string;
      password: string;
    },
    thunkAPI
  ) => {
    try {
      const { email, password } = userData;
      
      if(!email || !password || !email.trim() || !password.trim()) {
        throw new Error("Please fill all fields");
      }

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (!userCredential.user) {
        throw new Error("User not found");
      }

      const userRef = await doc(db, "users", `${userCredential.user.uid}`);

      const user = await getDoc(userRef);

      return user.data() as IUser;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error)?.message as string);
    }
  }
);

export const userLogout = createAsyncThunk("auth/logout", async () => {
  try {
    console.log("User signed out");

    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },

    setUser(state, action) {
      state.user = action.payload;
    },

    setIsAuth(state, action) {
      state.isAuth = action.payload;
    },

    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(userRegister.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(userRegister.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuth = true;
      state.error = null;
      state.user = action.payload;
    });

    builder.addCase(userRegister.rejected, (state, action) => {
      state.isLoading = false;
      state.isAuth = false;
      state.error = action.payload as string;
      state.user = null;
    });

    builder.addCase(userLogin.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuth = true;
      state.error = null;
      state.user = action.payload;
    });

    builder.addCase(userLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.isAuth = false;
      state.error = action.payload as string;
      state.user = null;
    });

    builder.addCase(userLogout.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(userLogout.fulfilled, (state) => {
      state.isLoading = false;
      state.isAuth = false;
      state.error = null;
      state.user = null;
    });

    builder.addCase(userLogout.rejected, (state, action) => {
      state.isLoading = false;
      state.isAuth = false;
      state.error = action.payload as string;
      state.user = null;
    });
  },
});

export default authSlice.reducer;

export const { clearError, setUser, setIsAuth, setIsLoading } =
  authSlice.actions;
