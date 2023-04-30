import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

type ServiceItemProps = {
  isLastItem: boolean;
  service: {
    id: string;
    name: string;
    address: string;
    thumbnail: string;
    startingPrice: number;
    rating: number;
    reviews: { id: string }[];
    distance: number;
    categories: { name: string };
  };
};

const ServiceSearchItem = (props: ServiceItemProps) => {
  const { service, isLastItem } = props;

  return (
    <Pressable
      style={[
        styles.container,
        {
          marginBottom: isLastItem ? 0 : 10,
        },
      ]}
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
          <Text style={styles.title} numberOfLines={2}>
            {service.name}
          </Text>

          <View style={styles.ratingContainer}>
            <AntDesign name='star' size={12} color='#ffa73c' />
            <Text style={styles.rating}>{service.rating}</Text>
          </View>
        </View>

        <Text style={styles.subtitle} numberOfLines={3}>
          {service.categories.name} {service.distance} km away &bull; ₹{" "}
          {service.startingPrice} starting price &bull; {service.reviews.length}{" "}
          reviews
        </Text>
      </View>
    </Pressable>
  );
};

export default ServiceSearchItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
  },

  thumbnail: {
    width: 160,
    aspectRatio: 16 / 9,
    borderRadius: 10,
  },

  infoContainer: {
    marginHorizontal: 10,
    flex: 1,
  },

  title: {
    fontSize: 14,
    fontWeight: "500",
    flex: 1,
    color: "#213a61",
  },

  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  rating: {
    fontSize: 12,
    fontWeight: "500",
    marginLeft: 5,
    color: "#213a61",
  },

  subtitle: {
    fontSize: 12,
    fontWeight: "400",
    color: "#5b7083",
    marginTop: 5,
  },
});
