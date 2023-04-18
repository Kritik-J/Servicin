import { Stack } from "expo-router";
import useMode from "../../hooks/useMode";
import { StatusBar } from "expo-status-bar";

export default function TabLayout() {
  const mode = useMode();

  return (
    <>
      <StatusBar style={mode === "dark" ? "light" : "dark"} />

      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="register" />
      </Stack>
    </>
  );
}
