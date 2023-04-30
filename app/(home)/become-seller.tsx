import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import React from "react";
import themes from "../../constants/themes";
import useMode from "../../hooks/useMode";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Typography from "../../components/Typography";
import FormInput from "../../components/FormInput";

const BecomeSeller = () => {
  const router = useRouter();
  const mode = useMode();

  return (
    <ScrollView
      contentContainerStyle={[
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
        Become a Seller
      </Typography>
    </ScrollView>
  );
};

export default BecomeSeller;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: (StatusBar.currentHeight as number) + 10,
  },
});
