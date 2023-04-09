import { ScrollView, View, StyleSheet, FlatList } from "react-native";
import themes from "../../constants/themes";
import useMode from "../../hooks/useMode";
import Typography from "../../components/Typography";
import CategoriesList from "../../components/CategoriesList";
import ServiceListItem from "../../components/ServiceListItem";
import services from "../../assets/data/services.json";

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
        variant='h3'
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
        variant='h3'
        style={{ paddingHorizontal: 10, color: themes[mode].colors.highlight }}
      >
        Top Services
      </Typography>

      <View style={{ height: 10 }} />

      <ServicesList />

      <View style={{ height: 10 }} />

      <Typography
        variant='h3'
        style={{ paddingHorizontal: 10, color: themes[mode].colors.highlight }}
      >
        Recommended Services
      </Typography>

      <View style={{ height: 10 }} />

      <ServicesList />
    </ScrollView>
  );
}

const ServicesList = () => {
  return (
    <FlatList
      data={services}
      horizontal={true}
      contentContainerStyle={styles.services}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <ServiceListItem
          service={item}
          key={index}
          isLastItem={index === services.length - 1}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  services: {
    paddingHorizontal: 10,
  },
});
