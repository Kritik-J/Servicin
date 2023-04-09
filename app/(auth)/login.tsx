import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import React from "react";
import useMode from "../../hooks/useMode";
import themes from "../../constants/themes";
import Typography from "../../components/Typography";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";
import { Octicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useAppDispatch } from "../../hooks/useReduce";
import { userLogin } from "../../redux/authSlice";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const mode = useMode();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useAppDispatch();

  const { isLoading, error } = useAuth();

  const handleLogin = () => {
    dispatch(
      userLogin({
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
      <Typography variant='h1'>Welcome Back</Typography>

      <View style={{ height: 10 }} />

      <Typography variant='h3'>Login to continue to your account</Typography>

      <View style={{ height: 30 }} />

      <FormInput
        placeholder='Email Address'
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
      />

      <View style={{ height: 10 }} />

      <FormInput
        placeholder='Password'
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

      <View style={{ height: 10 }} />

      <Link href='/forgot-password' style={{ alignSelf: "flex-end" }}>
        <Typography
          variant='body1'
          style={{
            color: themes[mode].colors.highlight,
          }}
        >
          Forgot Password?
        </Typography>
      </Link>

      <View style={{ height: 20 }} />

      <Button
        title='Login'
        onPress={handleLogin}
        loading={isLoading}
        borderRadius={30}
      />

      <View style={{ height: 40 }} />

      <Typography
        variant='body1'
        style={{
          textAlign: "center",
        }}
      >
        Don't have an account?{" "}
        <Link href='/register'>
          <Typography
            variant='body1'
            style={{ color: themes[mode].colors.highlight }}
          >
            Register
          </Typography>
        </Link>
      </Typography>

      <View style={{ height: 20 }} />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: (StatusBar.currentHeight as number) + 10,
  },
});
