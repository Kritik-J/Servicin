import { ScrollView, View, StyleSheet, FlatList } from "react-native";
import themes from "../../../constants/themes";
import useMode from "../../../hooks/useMode";
import Typography from "../../../components/Typography";
import CategoriesList from "../../../components/CategoriesList";
import GigListItem from "../../../components/GigListItem";
import gigs from "../../../assets/data/services.json";

export default function Home() {
  const mode = useMode();

  return (
    <ScrollView
      style={[
        styles.container,
        {
          backgroundColor: themes[mode].colors.background,
        },
      ]}
    >
      <View style={{ height: 10 }} />

      <Typography
        variant="h3"
        style={{ paddingHorizontal: 10, color: themes[mode].colors.highlight }}
      >
        Categories
      </Typography>

      <View style={{ height: 5 }} />

      <View style={{ paddingHorizontal: 5 }}>
        <CategoriesList />
      </View>

      <View style={{ height: 10 }} />

      <Typography
        variant="h3"
        style={{ paddingHorizontal: 10, color: themes[mode].colors.highlight }}
      >
        Top Gigs
      </Typography>

      <View style={{ height: 10 }} />

      <GigsList />

      <View style={{ height: 10 }} />

      <Typography
        variant="h3"
        style={{ paddingHorizontal: 10, color: themes[mode].colors.highlight }}
      >
        Recommended Gigs
      </Typography>

      <View style={{ height: 10 }} />

      <GigsList />
    </ScrollView>
  );
}

const GigsList = () => {
  return (
    <FlatList
      data={gigs}
      horizontal={true}
      contentContainerStyle={styles.gigs}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <GigListItem
          gig={item}
          key={index}
          isLastItem={index === gigs.length - 1}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  gigs: {
    paddingHorizontal: 10,
  },
});
