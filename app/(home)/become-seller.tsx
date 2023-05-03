import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import React from "react";
import themes from "../../constants/themes";
import useMode from "../../hooks/useMode";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Typography from "../../components/Typography";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";

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

      <View style={{ height: 30 }} />

      <FormInput
        placeholder="Enter your full name"
        value=""
        onChangeText={() => {}}
      />

      <View style={{ height: 10 }} />

      <FormInput
        placeholder="Enter your email"
        value=""
        onChangeText={() => {}}
      />

      <View style={{ height: 10 }} />

      <FormInput
        placeholder="Enter your phone"
        value=""
        onChangeText={() => {}}
      />

      <View style={{ height: 10 }} />

      <FormInput
        placeholder="Enter your address"
        value=""
        onChangeText={() => {}}
      />

      <View style={{ height: 10 }} />

      <FormInput
        placeholder="Enter your city"
        value=""
        onChangeText={() => {}}
      />

      <View style={{ height: 10 }} />

      <FormInput
        placeholder="Enter your state"
        value=""
        onChangeText={() => {}}
      />

      <View style={{ height: 10 }} />

      <FormInput
        placeholder="Enter your country"
        value=""
        onChangeText={() => {}}
      />

      <View style={{ height: 10 }} />

      <FormInput
        placeholder="Enter your zip"
        value=""
        onChangeText={() => {}}
      />

      <View style={{ height: 20 }} />

      <FormInput
        placeholder="Enter your PAN number"
        value=""
        onChangeText={() => {}}
      />

      <View style={{ height: 20 }} />

      <Button title="Become a Seller" onPress={() => {}} />
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
