import { StyleSheet, View, StatusBar, Image } from "react-native";
import React from "react";
import useMode from "../hooks/useMode";
import { AntDesign } from "@expo/vector-icons";
import themes from "../constants/themes";

const BottomTabHeader = () => {
  const mode = useMode();
  const logo = require("../assets/images/logos/servicin-dark.png");

  return (
    <View
      style={[
        styles.header,
        {
          backgroundColor: themes[mode].colors.header,
        },
      ]}
    >
      <Image source={logo} style={styles.headerLogo} />

      <AntDesign name='search1' color='#fff' size={24} />
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
