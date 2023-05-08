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
import { clearError, userRegister } from "../../redux/authSlice";
import useAuth from "../../hooks/useAuth";
import { checkEmail, checkLength, checkNull } from "../../utils/validators";

const Register = () => {
  const mode = useMode();
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAuth();

  const [form, setForm] = React.useState({
    displayName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({
    displayName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleRegister = () => {
    if (checkNull(form.displayName)) {
      setErrors({ ...errors, displayName: "Name is required" });
      return;
    }

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

    if (checkLength(form.password, 8)) {
      setErrors({
        ...errors,
        password: "Password must be at least 8 characters",
      });
      return;
    }

    dispatch(userRegister(form));
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

      <Typography variant="h1">Register With</Typography>

      <View style={{ height: 30 }} />

      <FormInput
        placeholder="Name"
        value={form.displayName}
        onChangeText={(value) => handleChange("displayName", value)}
        status={errors.displayName ? "error" : ""}
        hint={errors.displayName}
      />

      <View style={{ height: 10 }} />

      <FormInput
        placeholder="Email Address"
        value={form.email}
        onChangeText={(value) => handleChange("email", value)}
        inputProps={{ autoCapitalize: "none" }}
        status={errors.email ? "error" : ""}
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
        status={errors.password ? "error" : ""}
        hint={errors.password}
      />

      <View style={{ height: 20 }} />

      <Button
        title="Register"
        onPress={handleRegister}
        loading={isLoading}
        borderRadius={30}
        disabled={
          errors.displayName || errors.email || errors.password ? true : false
        }
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
        Already have an account?{" "}
        <Link href="/">
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
