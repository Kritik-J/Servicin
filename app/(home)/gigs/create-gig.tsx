import { StatusBar, StyleSheet, View } from "react-native";
import React from "react";
import themes from "../../../constants/themes";
import useMode from "../../../hooks/useMode";
import Typography from "../../../components/Typography";
import { AntDesign } from "@expo/vector-icons";
import FormInput from "../../../components/FormInput";
import { useRouter } from "expo-router";

const CreateGig = () => {
  const mode = useMode();
  const router = useRouter();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: themes[mode].colors.background },
      ]}
    >
      <AntDesign
        name="arrowleft"
        size={24}
        onPress={() => router.back()}
        style={{ color: themes[mode].colors.iconColor }}
      />

      <View style={{ height: 10 }} />

      <Typography variant="h2" style={{ color: themes[mode].colors.text }}>
        Create a Gig
      </Typography>

      <View style={{ height: 30 }} />

      <FormInput placeholder="Title" value="" onChangeText={() => {}} />
    </View>
  );
};

export default CreateGig;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: (StatusBar.currentHeight as number) + 10,
  },
});
