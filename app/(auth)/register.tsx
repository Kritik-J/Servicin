import { StatusBar, StyleSheet, View, SafeAreaView } from "react-native";
import React from "react";
import themes from "../../constants/themes";
import Typography from "../../components/Typography";
import useMode from "../../hooks/useMode";
import FormInput from "../../components/FormInput";
import { Octicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import Button from "../../components/Button";
import { useAppDispatch } from "../../hooks/useReduce";
import { userRegister } from "../../redux/authSlice";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const mode = useMode();

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useAppDispatch();

  const { isLoading, error } = useAuth();

  const handleRegister = () => {
    dispatch(
      userRegister({
        displayName: name,
        email,
        password,
      })
    );
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: themes[mode].colors.background,
        },
      ]}
    >
      <Typography variant="h3">Welcome Back</Typography>

      <View style={{ height: 10 }} />

      <Typography variant="h1">Register With</Typography>

      <View style={{ height: 30 }} />

      <FormInput placeholder="Name" value={name} onChangeText={setName} />

      <View style={{ height: 10 }} />

      <FormInput
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        inputProps={{ autoCapitalize: "none" }}
      />

      <View style={{ height: 10 }} />

      <FormInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!showPassword}
        trailingIcon={
          <Octicons
            name={showPassword ? "eye-closed" : "eye"}
            size={24}
            color={themes[mode].colors.iconColor}
            onPress={toggleShowPassword}
            style={{
              marginRight: 10,
            }}
          />
        }
      />

      <View style={{ height: 20 }} />

      <Button
        title="Register"
        onPress={handleRegister}
        loading={isLoading}
        borderRadius={30}
      />

      <View style={{ height: 40 }} />

      <Typography
        variant="body1"
        style={{
          textAlign: "center",
        }}
      >
        Already have an account?{" "}
        <Link href="/login">
          <Typography
            variant="body1"
            style={{ color: themes[mode].colors.highlight }}
          >
            Login
          </Typography>
        </Link>
      </Typography>

      <View style={{ height: 20 }} />

      <Typography
        variant="body1"
        style={{
          textAlign: "center",
        }}
      >
        By registering, you agree to our{" "}
        <Link href="/terms">
          <Typography
            variant="body1"
            style={{ color: themes[mode].colors.highlight }}
          >
            Terms of Service
          </Typography>
        </Link>{" "}
        and{" "}
        <Link href="/privacy">
          <Typography
            variant="body1"
            style={{ color: themes[mode].colors.highlight }}
          >
            Privacy Policy
          </Typography>
        </Link>
      </Typography>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: (StatusBar.currentHeight as number) + 10,
    justifyContent: "center",
  },
});
