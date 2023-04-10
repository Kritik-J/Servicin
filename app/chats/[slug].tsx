import {
  StyleSheet,
  View,
  ImageBackground,
  FlatList,
  StatusBar,
  TextInput,
} from "react-native";
import React from "react";
import themes from "../../constants/themes";
import useMode from "../../hooks/useMode";
import Typography from "../../components/Typography";
import messages from "../../assets/data/messages.json";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useRouter, useSearchParams } from "expo-router";
import chats from "../../assets/data/chats.json";

const Chat = () => {
  const mode = useMode();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: themes[mode].colors.background },
      ]}
    >
      <Header />

      <ImageBackground
        source={{
          uri: "https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png",
        }}
        style={styles.image}
      >
        <FlatList
          contentContainerStyle={styles.list}
          data={messages}
          inverted
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View
              style={[
                styles.message,
                {
                  backgroundColor:
                    item.user.id === "u1"
                      ? themes[mode].colors.chatMyMessageBackgroundColor
                      : themes[mode].colors.chatMessageBackgroundColor,
                  alignSelf: item.user.id === "u1" ? "flex-end" : "flex-start",
                },
              ]}
            >
              <Typography variant='body1'>{item.text}</Typography>
            </View>
          )}
        />
      </ImageBackground>

      <InputBox />
    </View>
  );
};

const Header = () => {
  const router = useRouter();

  const { slug } = useSearchParams<{ slug: string }>();

  const chat = chats.find((chat) => chat.id === slug);

  return (
    <View
      style={[
        styles.header,
        { backgroundColor: themes[useMode()].colors.header },
      ]}
    >
      <AntDesign
        name='arrowleft'
        size={24}
        color='white'
        onPress={() => router.back()}
      />

      <Typography variant='h3' style={{ marginLeft: 10, color: "white" }}>
        {chat?.user.name}
      </Typography>
    </View>
  );
};

const InputBox = () => {
  return (
    <View
      style={[
        styles.inputBox,
        {
          backgroundColor: themes[useMode()].colors.bottomTabBar,
        },
      ]}
    >
      <TextInput
        style={[
          styles.input,
          {
            borderColor: themes[useMode()].colors.textInputBorderColor,
            color: themes[useMode()].colors.textInputFontColor,
          },
        ]}
        placeholderTextColor={themes[useMode()].colors.textInputFontColor}
        placeholder='Type a message'
      />

      <MaterialIcons
        name='send'
        style={[
          styles.sendIcon,
          {
            backgroundColor: themes[useMode()].colors.header,
          },
        ]}
      />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    paddingTop: (StatusBar.currentHeight as number) + 10,
  },

  image: {
    flex: 1,
    resizeMode: "cover",
  },

  list: {
    padding: 10,
  },

  message: {
    padding: 10,
    borderRadius: 10,
    maxWidth: "80%",
    marginVertical: 5,
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },

  input: {
    flex: 1,
    padding: 5,
    paddingHorizontal: 15,
    borderRadius: 25,
    marginRight: 10,
    borderWidth: 1,
  },

  sendIcon: {
    padding: 10,
    borderRadius: 25,
    color: "white",
    fontSize: 16,
  },
});
