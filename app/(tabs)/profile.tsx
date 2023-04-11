import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import useMode from "../../hooks/useMode";
import themes from "../../constants/themes";
import Typography from "../../components/Typography";
import Avatar from "../../components/Avatar";
import useAuth from "../../hooks/useAuth";
import Button from "../../components/Button";
import { useAppDispatch } from "../../hooks/useReduce";
import { userLogout } from "../../redux/authSlice";
import { useRouter } from "expo-router";

const Profile = () => {
  const mode = useMode();

  const { user } = useAuth();

  const router = useRouter();

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    router.replace("/login");
    dispatch(userLogout());
  };

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        {
          backgroundColor: themes[mode].colors.background,
        },
      ]}
    >
      <View style={styles.header}>
        <Avatar
          // uri={user.photoURL}
          uri={"https://avatars.githubusercontent.com/u/48843448?v=4"}
          size={128}
        />

        <View style={{ height: 10 }} />

        <Typography variant="h2" style={{ color: themes[mode].colors.text }}>
          {user.displayName}
        </Typography>

        <View style={{ height: 5 }} />

        <Typography variant="h3" style={{ color: themes[mode].colors.text }}>
          {user.email}
        </Typography>

        <View style={{ height: 10 }} />

        <Button onPress={handleLogout} title="Logout" />
      </View>

      <View style={styles.body}></View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },

  body: {
    padding: 10,
  },
});
