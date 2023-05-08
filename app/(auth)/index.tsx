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
import { clearError, userLogin } from "../../redux/authSlice";
import useAuth from "../../hooks/useAuth";
import { checkEmail, checkLength, checkNull } from "../../utils/validators";

const Login = () => {
  const mode = useMode();
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAuth();
  const [form, setForm] = React.useState({ email: "", password: "" });
  const [errors, setErrors] = React.useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleLogin = () => {
    if (checkNull(form.email)) {
      setErrors({ ...errors, email: "Email is required" });
      return;
    }

    if (checkEmail(form.email)) {
      setErrors({ ...errors, email: "Email is invalid" });
      return;
    }

    if (checkNull(form.password)) {
      setErrors({ ...errors, password: "Password is required" });
      return;
    }

    dispatch(userLogin(form));
  };

  React.useEffect(() => {
    if (error) {
      setTimeout(() => {
        dispatch(clearError());
      }, 5000);
    }
  }, [error]);

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

      <Typography variant="h1">Login With</Typography>

      <View style={{ height: 30 }} />

      <FormInput
        placeholder="Email Address"
        value={form.email}
        onChangeText={(value) => handleChange("email", value)}
        inputProps={{ autoCapitalize: "none" }}
        status={errors.email && "error"}
        hint={errors.email}
      />

      <View style={{ height: 10 }} />

      <FormInput
        placeholder="Password"
        value={form.password}
        onChangeText={(value) => handleChange("password", value)}
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
        status={errors.password && "error"}
        hint={errors.password}
      />

      <View style={{ height: 10 }} />

      <Link href="/forgot-password" style={{ alignSelf: "flex-end" }}>
        <Typography
          variant="body1"
          style={{
            color: themes[mode].colors.highlight,
          }}
        >
          Forgot Password?
        </Typography>
      </Link>

      <View style={{ height: 20 }} />

      <Button
        title="Login"
        onPress={handleLogin}
        loading={isLoading}
        borderRadius={30}
        disabled={errors.email || errors.password ? true : false}
      />

      {error && (
        <Typography
          variant="body1"
          style={{
            color: themes[mode].colors.errorColor,
            textAlign: "center",
            marginTop: 20,
          }}
        >
          {error}
        </Typography>
      )}

      <View style={{ height: 40 }} />

      <Typography
        variant="body1"
        style={{
          textAlign: "center",
        }}
      >
        Don't have an account?{" "}
        <Link href="/register">
          <Typography
            variant="body1"
            style={{ color: themes[mode].colors.highlight }}
          >
            Register
          </Typography>
        </Link>
      </Typography>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: (StatusBar.currentHeight as number) + 10,
    justifyContent: "center",
  },
});
