import { StyleSheet, Text, TextInput, View } from "react-native";
import { style } from "../../constants/style";

const Input = ({ label, textInputConfig, inputStyle, invalid }) => {
  const inputStyles = [styles.input];
  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }
  return (
    <View style={[styles.container, inputStyle]}>
      <Text style={[styles.label, invalid && styles.errorLabel]}>{label}</Text>
      <TextInput
        style={[inputStyles, invalid && styles.error]}
        {...textInputConfig}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    color: style.colors.primary100,
    fontSize: 12,
    marginBottom: 4,
  },
  input: {
    backgroundColor: style.colors.primary100,
    color: style.colors.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  errorLabel: {
    color: style.colors.error500,
  },
  error: {
    backgroundColor: style.colors.error50,
  },
});
