import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import useMode from "../../hooks/useMode";

export default function TabLayout() {
  const mode = useMode();

  return (
    <>
      <Stack screenOptions={{ headerShown: false, animation: "none" }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="gigs/[slug]" />
        <Stack.Screen name="gigs/create-gig" />
        <Stack.Screen name="chats/[slug]" />
        <Stack.Screen name="search" />
        <Stack.Screen name="become-seller" />
      </Stack>

      <StatusBar style={mode === "dark" ? "light" : "dark"} />
    </>
  );
}
