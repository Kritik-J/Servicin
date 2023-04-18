import { Stack } from "expo-router";

export default function TabLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="services/[slug]" />
      <Stack.Screen name="chats/[slug]" />
      <Stack.Screen name="become-seller" />
    </Stack>
  );
}
