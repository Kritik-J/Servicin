import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

type GigItemProps = {
  isLastItem: boolean;
  gig: {
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

const gigSearchItem = (props: GigItemProps) => {
  const { gig, isLastItem } = props;
  const router = useRouter();

  return (
    <Pressable
      style={[
        styles.container,
        {
          marginBottom: isLastItem ? 0 : 10,
        },
      ]}
      onPress={() => {
        router.push(`/gigs/${gig.id}`);
      }}
    >
      <Image
        source={{
          uri: gig.thumbnail,
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
            {gig.name}
          </Text>

          <View style={styles.ratingContainer}>
            <AntDesign name="star" size={12} color="#ffa73c" />
            <Text style={styles.rating}>{gig.rating}</Text>
          </View>
        </View>

        <Text style={styles.subtitle} numberOfLines={3}>
          {gig.categories.name} {gig.distance} km away &bull; ₹{" "}
          {gig.startingPrice} starting price &bull; {gig.reviews.length} reviews
        </Text>
      </View>
    </Pressable>
  );
};

export default gigSearchItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
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
