import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import useMode from "../../../hooks/useMode";
import themes from "../../../constants/themes";
import ChatListItem from "../../../components/ChatListItem";
import chats from "../../../assets/data/chats.json";

const Chats = () => {
  const mode = useMode();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: themes[mode].colors.background,
        },
      ]}
    >
      <FlatList
        data={chats}
        renderItem={({ item }) => (
          <ChatListItem
            chat={item}
            isLast={chats.indexOf(item) === chats.length - 1}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
