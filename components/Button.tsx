import { ActivityIndicator, Pressable, Text } from "react-native";
import React from "react";
import useMode from "../hooks/useMode";
import themes from "../constants/themes";

type ButtonProps = {
  title: string;
  onPress: () => void;
  height?: number | string;
  width?: string | number;
  backgroundColor?: string;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
  loading?: boolean;
  disabled?: boolean;
  fontSize?: number;
  fontWeight?: string;
  fontColor?: string;
  spinnerColor?: string;
  buttonStyle?: any;
  textStyle?: any;
};

const Button = (props: ButtonProps) => {
  const mode = useMode();

  const {
    title,
    onPress,
    height = 48,
    width = "100%",
    backgroundColor = themes[mode].colors.primaryButtonColor,
    borderRadius = 5,
    borderWidth = 1,
    borderColor = themes[mode].colors.primaryButtonColor,
    loading = false,
    disabled = false,
    fontSize = 14,
    fontColor = themes[mode].colors.primaryButtonTextColor,
    spinnerColor = themes[mode].colors.primaryButtonTextColor,
    buttonStyle,
    textStyle,
  } = props;

  return (
    <Pressable
      style={{
        height,
        width,
        backgroundColor:
          disabled || loading
            ? themes[mode].colors.disabledButtonColor
            : backgroundColor,

        borderRadius,
        borderWidth,
        borderColor:
          disabled || loading
            ? themes[mode].colors.disabledButtonColor
            : borderColor,
        justifyContent: "center",
        alignItems: "center",
        ...buttonStyle,
      }}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator size="small" color={spinnerColor} />
      ) : (
        <Text
          style={{
            color: fontColor,
            fontSize,
            ...textStyle,
          }}
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
};

export default Button;
