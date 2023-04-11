import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Typography from "../components/Typography";

type IAlertProps = {
  message: string;
};

const Alert = (props: IAlertProps) => {
  const { message } = props;

  return (
    <View style={[styles.container]}>
      <Typography variant="h4">{message}</Typography>
    </View>
  );
};

export default Alert;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
