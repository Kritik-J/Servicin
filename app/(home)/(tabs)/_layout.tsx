import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import BottomTabHeader from "../../../components/BottomTabHeader";
import useMode from "../../../hooks/useMode";
import themes from "../../../constants/themes";
import { StatusBar } from "expo-status-bar";

export default function TabLayout() {
  const mode = useMode();

  return (
    <>
      <StatusBar style="light" />

      <Tabs
        screenOptions={{
          header: () => <BottomTabHeader />,
          tabBarActiveTintColor: themes[mode].colors.bottomTabBarActive,
          tabBarInactiveTintColor: themes[mode].colors.bottomTabBarInactive,
          tabBarStyle: {
            backgroundColor: themes[mode].colors.bottomTabBar,
            borderTopColor: themes[mode].colors.bottomTabBar,
            borderTopWidth: 1,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Tab One",
            tabBarIcon: ({ color }) => (
              <AntDesign name="home" color={color} size={24} />
            ),
          }}
        />

        <Tabs.Screen
          name="chats"
          options={{
            title: "Chats",
            tabBarIcon: ({ color }) => (
              <AntDesign name="message1" color={color} size={24} />
            ),
          }}
        />

        <Tabs.Screen
          name="notifications"
          options={{
            title: "Notifications",
            tabBarIcon: ({ color }) => (
              <AntDesign name="bells" color={color} size={24} />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color }) => (
              <AntDesign name="user" color={color} size={24} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
