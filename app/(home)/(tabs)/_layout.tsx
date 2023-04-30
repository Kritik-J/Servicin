import { Tabs } from "expo-router";
import BottomTabHeader from "../../../components/BottomTabHeader";
import useMode from "../../../hooks/useMode";
import themes from "../../../constants/themes";
import {
  HomeFilledIcon,
  HomeIcon,
  MessagesFilledIcon,
  MessagesIcon,
  NotificationsFilledIcon,
  NotificationsIcon,
  ProfileFilledIcon,
  ProfileIcon,
} from "../../../components/Svg";

export default function TabLayout() {
  const mode = useMode();

  const IconProps = {
    width: 24,
    height: 24,
    fill: themes[mode].colors.bottomTabBarInactive,
  };

  return (
    <>
      <Tabs
        screenOptions={{
          header: () => <BottomTabHeader />,
          tabBarStyle: {
            backgroundColor: themes[mode].colors.bottomTabBar,
            borderTopColor: themes[mode].colors.headerBorderColor,
          },

          tabBarLabel: () => null,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Tab One",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <HomeFilledIcon {...IconProps} />
              ) : (
                <HomeIcon {...IconProps} />
              ),
          }}
        />

        <Tabs.Screen
          name="chats"
          options={{
            title: "Chats",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MessagesFilledIcon {...IconProps} />
              ) : (
                <MessagesIcon {...IconProps} />
              ),
          }}
        />

        <Tabs.Screen
          name="notifications"
          options={{
            title: "Notifications",

            tabBarIcon: ({ focused }) =>
              focused ? (
                <NotificationsFilledIcon {...IconProps} />
              ) : (
                <NotificationsIcon {...IconProps} />
              ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",

            tabBarIcon: ({ focused }) =>
              focused ? (
                <ProfileFilledIcon {...IconProps} />
              ) : (
                <ProfileIcon {...IconProps} />
              ),
          }}
        />
      </Tabs>
    </>
  );
}
