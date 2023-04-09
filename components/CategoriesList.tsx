import { StyleSheet, View, Image } from "react-native";
import React from "react";
import categories from "../assets/data/categories.json";
import Typography from "./Typography";
import themes from "../constants/themes";
import useMode from "../hooks/useMode";

const CategoriesList = () => {
  const mode = useMode();

  const numOfColumns = 3;

  const columns = Array.from(Array(numOfColumns), () => new Array());

  categories.forEach((category, index) => {
    columns[index % numOfColumns].push(category);
  });
  return (
    <View style={styles.container}>
      {columns.map((column, index) => (
        <View key={index} style={styles.column}>
          {column.map((category, index) => (
            <View
              style={[
                styles.category,
                {
                  backgroundColor: themes[mode].colors.categoryBackgroundColor,
                },
              ]}
              key={index}
            >
              <Image
                source={{
                  uri: category.icon,
                }}
                style={styles.categoryImage}
              />
              <Typography variant='body2' style={styles.categoryText}>
                {category.name}
              </Typography>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default CategoriesList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },

  column: {
    flex: 1,
  },

  category: {
    margin: 5,
    padding: 8,
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },

  categoryImage: {
    width: 36,
    height: 36,
  },

  categoryText: {
    fontWeight: "400",
    marginTop: 5,
    // color: "#213a61",
  },
});
