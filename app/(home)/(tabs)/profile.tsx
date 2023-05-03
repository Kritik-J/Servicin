import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React from "react";
import useMode from "../../../hooks/useMode";
import themes from "../../../constants/themes";
import Typography from "../../../components/Typography";
import Avatar from "../../../components/Avatar";
import useAuth from "../../../hooks/useAuth";
import Button from "../../../components/Button";
import { useAppDispatch } from "../../../hooks/useReduce";
import { userLogout } from "../../../redux/authSlice";
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
      {!user ? null : (
        <>
          <View style={styles.header}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Avatar uri={user.photoURL} size={64} />

              <View
                style={{
                  marginLeft: 20,
                }}
              >
                <Typography
                  variant="h2"
                  style={{ color: themes[mode].colors.text }}
                >
                  {user.displayName}
                </Typography>

                <View style={{ height: 5 }} />

                <Typography
                  variant="h4"
                  style={{ color: themes[mode].colors.text }}
                >
                  {user.email}
                </Typography>
              </View>
            </View>
          </View>

          <View
            style={{
              height: 1,
              backgroundColor: themes[mode].colors.lineColor,
              width: "100%",
            }}
          />

          <View style={styles.body}>
            <Typography variant="h2">Options</Typography>

            <View style={{ height: 20 }} />

            <Pressable
              style={styles.options}
              onPress={() => router.push("/become-seller")}
            >
              <Typography variant="h4">Become a seller</Typography>
            </Pressable>

            <View style={{ height: 10 }} />

            <Pressable
              style={styles.options}
              onPress={() => router.push("/gigs/create-gig")}
            >
              <Typography variant="h4">Create a Gig</Typography>
            </Pressable>

            <View style={{ height: 10 }} />

            <Pressable style={styles.options}>
              <Typography variant="h4">Edit Profile</Typography>
            </Pressable>

            <View style={{ height: 10 }} />

            <Pressable style={styles.options}>
              <Typography variant="h4">Change Password</Typography>
            </Pressable>

            <View style={{ height: 20 }} />

            <Button
              onPress={handleLogout}
              title="Logout"
              buttonStyle={{ height: 42 }}
            />
          </View>
        </>
      )}
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
    paddingHorizontal: 10,
    paddingVertical: 20,
  },

  body: {
    padding: 10,
  },

  options: {},
});
