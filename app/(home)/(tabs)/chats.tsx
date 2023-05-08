import { StyleSheet, View, FlatList, Pressable } from "react-native";
import React from "react";
import useMode from "../../../hooks/useMode";
import themes from "../../../constants/themes";
import ChatListItem from "../../../components/ChatListItem";
import chats from "../../../assets/data/chats.json";
import { AntDesign } from "@expo/vector-icons";

const Chats = () => {
  const mode = useMode();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: themes[mode].colors.background },
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

      <Pressable style={styles.addChat}>
        <AntDesign name="message1" size={20} color="white" />
      </Pressable>
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  addChat: {
    backgroundColor: "#ffa73c",
    position: "absolute",
    bottom: 16,
    right: 16,
    width: 54,
    height: 54,
    borderRadius: 27,
    alignItems: "center",
    justifyContent: "center",
  },
});
