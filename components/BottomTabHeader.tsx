import { StyleSheet, View, StatusBar, Image } from "react-native";
import React from "react";
import useMode from "../hooks/useMode";
import themes, { DARK_MODE } from "../constants/themes";
import { SearchIcon } from "./Svg";

const BottomTabHeader = () => {
  const mode = useMode();
  const logo =
    mode === DARK_MODE
      ? require("../assets/images/logos/servicin-dark.png")
      : require("../assets/images/logos/servicin-light.png");

  return (
    <View
      style={[
        styles.header,
        {
          backgroundColor: themes[mode].colors.header,
          borderBottomColor: themes[mode].colors.headerBorderColor,
          borderBottomWidth: 1,
        },
      ]}
    >
      <Image source={logo} style={styles.headerLogo} />

      <SearchIcon width={24} height={24} fill={themes[mode].colors.iconColor} />
    </View>
  );
};

export default BottomTabHeader;

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight! + 10,
    paddingBottom: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerLogo: {
    width: 108,
    height: 30,
  },
});
