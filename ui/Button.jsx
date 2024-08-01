import { Pressable, StyleSheet, Text, View } from "react-native";
import { style } from "../constants/style";

const Button = ({ children, mode, style: customStyle, onPress }) => {
  return (
    <View style={customStyle}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: style.colors.primary500,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
  flat: {
    backgroundColor: "transparent",
  },
  flatText: {
    color: style.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: style.colors.primary100,
    borderRadius: 4,
  },
});
