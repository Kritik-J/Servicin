import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  StatusBar as RNStatusBar,
} from "react-native";
import React from "react";
import useMode from "../../hooks/useMode";
import themes from "../../constants/themes";
import Typography from "../../components/Typography";
import { useRouter, useSearchParams } from "expo-router";
import services from "../../assets/data/services.json";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import { IService } from "../../types";

const Service = () => {
  const mode = useMode();
  const { slug } = useSearchParams<{ slug: string }>();

  const router = useRouter();

  const service = services.find((service) => service.id === slug) as IService;

  const goBack = () => {
    router.back();
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: themes[mode].colors.background },
      ]}
    >
      <View>
        <Image source={{ uri: service.thumbnail }} style={styles.thumbnail} />

        <AntDesign
          name='arrowleft'
          size={24}
          style={styles.backButton}
          onPress={goBack}
        />
      </View>

      <ScrollView>
        <View style={{ padding: 10 }}>
          <Typography variant='h2'>{service.name}</Typography>

          <View style={{ height: 15 }} />

          <Typography variant='h4'>{service.description}</Typography>

          <View style={{ height: 10 }} />

          <Typography variant='body1'>
            {service.categories.name} &bull; {service.distance} km away &bull;
            starting from ${service.startingPrice}
          </Typography>

          <View style={{ height: 10 }} />

          <View style={styles.addressContainer}>
            <EvilIcons
              name='location'
              size={20}
              style={{
                color: themes[mode].colors.iconColor,
              }}
            />

            <Typography variant='body1'>{service.address}</Typography>
          </View>
        </View>

        <View
          style={{
            height: 1,
            backgroundColor: themes[mode].colors.lineColor,
            width: "100%",
          }}
        />

        <Options />

        <View
          style={{
            height: 1,
            backgroundColor: themes[mode].colors.lineColor,
            width: "100%",
          }}
        />
      </ScrollView>
    </View>
  );
};

const Options = () => {
  const mode = useMode();

  return (
    <ScrollView
      contentContainerStyle={styles.contactContainer}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <View
        style={[
          styles.contactButton,
          { backgroundColor: themes[mode].colors.bottomTabBar },
        ]}
      >
        <AntDesign
          name='phone'
          size={16}
          color={themes[mode].colors.iconColor}
        />

        <Typography variant='body2' style={styles.contactButtonText}>
          phone
        </Typography>
      </View>

      <View
        style={[
          styles.contactButton,
          { backgroundColor: themes[mode].colors.bottomTabBar },
        ]}
      >
        <AntDesign
          name='message1'
          size={16}
          color={themes[mode].colors.iconColor}
        />

        <Typography variant='body2' style={styles.contactButtonText}>
          message
        </Typography>
      </View>

      <View
        style={[
          styles.contactButton,
          { backgroundColor: themes[mode].colors.bottomTabBar },
        ]}
      >
        <AntDesign
          name='mail'
          size={16}
          color={themes[mode].colors.iconColor}
        />

        <Typography variant='body2' style={styles.contactButtonText}>
          mail
        </Typography>
      </View>

      <View
        style={[
          styles.contactButton,
          { backgroundColor: themes[mode].colors.bottomTabBar },
        ]}
      >
        <AntDesign
          name='sharealt'
          size={16}
          color={themes[mode].colors.iconColor}
        />

        <Typography variant='body2' style={styles.contactButtonText}>
          share
        </Typography>
      </View>

      <View
        style={[
          styles.contactButton,
          { backgroundColor: themes[mode].colors.bottomTabBar },
        ]}
      >
        <AntDesign
          name='hearto'
          size={16}
          color={themes[mode].colors.iconColor}
        />

        <Typography variant='body2' style={styles.contactButtonText}>
          save
        </Typography>
      </View>
    </ScrollView>
  );
};

export default Service;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  thumbnail: {
    width: "100%",
    aspectRatio: 4 / 3,
    resizeMode: "cover",
  },

  backButton: {
    position: "absolute",
    top: (RNStatusBar.currentHeight as number) + 10,
    left: 20,
    backgroundColor: "#eaf2ff",
    padding: 10,
    borderRadius: 10,
  },

  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  contactContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  contactButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
    padding: 10,
    borderRadius: 20,
  },

  contactButtonText: {
    marginLeft: 10,
  },
});
