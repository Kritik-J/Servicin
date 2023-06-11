import { StyleSheet, View, StatusBar, FlatList } from "react-native";
import React from "react";
import useMode from "../../hooks/useMode";
import themes from "../../constants/themes";
import FormInput from "../../components/FormInput";
import gigs from "../../assets/data/services.json";
import GigSearchItem from "../../components/GigSearchItem";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const SearchScreen = () => {
  const mode = useMode();
  const router = useRouter();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: themes[mode].colors.background,
        },
      ]}
    >
      <View
        style={[
          styles.headerContainer,
          {
            borderBottomColor: themes[mode].colors.headerBorderColor,
            borderBottomWidth: 1,
          },
        ]}
      >
        <AntDesign
          name="arrowleft"
          color={themes[mode].colors.iconColor}
          size={24}
          onPress={() => {
            router.back();
          }}
        />

        <FormInput
          value=""
          onChangeText={() => {}}
          placeholder="Search for gigs"
          containerStyle={{
            borderRadius: 30,
            borderColor: themes[mode].colors.headerBorderColor,
            flex: 1,
            marginLeft: 10,
          }}
          inputStyle={{
            paddingHorizontal: 15,
          }}
        />
      </View>

      <View style={styles.bodyContainer}>
        <FlatList
          data={gigs}
          contentContainerStyle={styles.gigs}
          renderItem={({ item, index }) => (
            <GigSearchItem
              gig={item}
              key={index}
              isLastItem={index === gigs.length - 1}
            />
          )}
        />
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerContainer: {
    padding: 10,
    paddingTop: (StatusBar.currentHeight as number) + 10,
    flexDirection: "row",
    alignItems: "center",
  },

  bodyContainer: {
    flex: 1,
  },

  gigs: {
    paddingVertical: 10,
  },
});
