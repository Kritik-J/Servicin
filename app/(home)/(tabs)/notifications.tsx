import { StyleSheet, Text, View } from "react-native";
import React from "react";
import useMode from "../../../hooks/useMode";
import themes from "../../../constants/themes";
import Typography from "../../../components/Typography";

const Notifications = () => {
  const mode = useMode();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: themes[mode].colors.background },
      ]}
    >
      <Typography variant="h3">No notifications yet.</Typography>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
