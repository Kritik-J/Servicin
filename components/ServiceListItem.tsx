import { StyleSheet, View, Image, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Typography from "./Typography";
import { useRouter } from "expo-router";
import { IService } from "../types";

type ServiceItemProps = {
  isLastItem: boolean;
  service: IService;
};

const ServiceListItem = (props: ServiceItemProps) => {
  const { service, isLastItem } = props;

  const router = useRouter();

  return (
    <Pressable
      style={[
        styles.container,
        {
          marginRight: isLastItem ? 0 : 10,
        },
      ]}
      onPress={() => {
        router.push(`/services/${service.id}`);
      }}
    >
      <Image
        source={{
          uri: service.thumbnail,
        }}
        style={styles.thumbnail}
      />

      <View style={styles.infoContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant='h4'
            textProps={{
              numberOfLines: 2,
            }}
          >
            {service.name}
          </Typography>

          <View style={styles.ratingContainer}>
            <AntDesign name='star' size={12} color='#ffa73c' />

            <Typography variant='body2' style={{ marginLeft: 5 }}>
              {service.rating}
            </Typography>
          </View>
        </View>

        <View style={{ height: 5 }} />

        <Typography variant='body2'>
          {service.categories.name} &bull; {service.distance} km away &bull; ₹{" "}
          {service.startingPrice} starting price &bull; {service.reviews.length}{" "}
          reviews
        </Typography>
      </View>
    </Pressable>
  );
};

export default ServiceListItem;

const styles = StyleSheet.create({
  container: {
    width: 200,
  },

  thumbnail: {
    width: "100%",
    aspectRatio: 16 / 9,
    borderRadius: 10,
  },

  infoContainer: {
    marginVertical: 10,
  },

  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
