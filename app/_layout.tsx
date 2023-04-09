import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { SplashScreen, Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { Provider } from "react-redux";
import store from "../redux/store";
import { useAppDispatch } from "../hooks/useReduce";
import { setMode } from "../redux/uiSlice";
import { DARK_MODE, LIGHT_MODE } from "../constants/themes";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { setIsAuth, setUser } from "../redux/authSlice";
import useAuth from "../hooks/useAuth";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <Provider store={store}>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </Provider>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { isAuth } = useAuth();

  useEffect(() => {
    if (colorScheme === "dark") {
      dispatch(setMode(DARK_MODE));
    } else {
      dispatch(setMode(LIGHT_MODE));
    }
  }, [colorScheme]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (userCredential) => {
      if (userCredential) {
        const userRef = await doc(db, "users", `${userCredential.uid}`);

        const user = await getDoc(userRef);

        dispatch(setUser(user.data()));
        dispatch(setIsAuth(true));
      }
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (isAuth) {
      router.replace("/");
    } else {
      router.replace("/login");
    }
  }, [isAuth]);

  // console.log("isAuth", isAuth);

  return (
    <>
      <Stack
        screenOptions={{
          animation: "none",
        }}
      >
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen name='(auth)' options={{ headerShown: false }} />
        <Stack.Screen name='services/[slug]' options={{ headerShown: false }} />
        <Stack.Screen name='chats/[slug]' options={{ headerShown: false }} />
        {/* <Stack.Screen name='modal' options={{ presentation: "modal" }} /> */}
      </Stack>
    </>
  );
}