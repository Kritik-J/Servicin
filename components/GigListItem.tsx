import { StyleSheet, View, Image, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Typography from "./Typography";
import { useRouter } from "expo-router";
import { IGig } from "../types";

type GigItemProps = {
  isLastItem: boolean;
  gig: IGig;
};

const GigListItem = (props: GigItemProps) => {
  const { gig, isLastItem } = props;

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
          <Typography
            variant="h4"
            textProps={{
              numberOfLines: 2,
            }}
          >
            {gig.name}
          </Typography>

          <View style={styles.ratingContainer}>
            <AntDesign name="star" size={12} color="#ffa73c" />

            <Typography variant="body2" style={{ marginLeft: 5 }}>
              {gig.rating}
            </Typography>
          </View>
        </View>

        <View style={{ height: 5 }} />

        <Typography variant="body2">
          {gig.categories.name} &bull; {gig.distance} km away &bull; ₹{" "}
          {gig.startingPrice} starting price &bull; {gig.reviews.length} reviews
        </Typography>
      </View>
    </Pressable>
  );
};

export default GigListItem;

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
