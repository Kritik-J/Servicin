import { Stack } from "expo-router";
import useMode from "../../hooks/useMode";
import { StatusBar } from "expo-status-bar";

export default function TabLayout() {
  const mode = useMode();

  return (
    <>
      <Stack screenOptions={{ headerShown: false, animation: "none" }}>
        <Stack.Screen name="login" />
        <Stack.Screen name="register" />
      </Stack>

      <StatusBar style={mode === "dark" ? "light" : "dark"} />
    </>
  );
}
