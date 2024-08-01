import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "./Input";
import Button from "../../ui/Button";

const ExpenseForm = ({
  onCancel,
  onSubmit,
  submitButtonLabel,
  defaultValues,
}) => {
  const [input, setInput] = useState({
    amount: {
      value: defaultValues?.amount?.toString() || "",
      isValid: true,
    },
    date: {
      value: defaultValues?.date?.toISOString().slice(0, 10) || "",
      isValid: true,
    },
    description: {
      value: defaultValues?.description || "",
      isValid: true,
    },
  });

  const inputChangeHandler = (inputIdentifier, enterValue) => {
    setInput((currentInput) => {
      return {
        ...currentInput,
        [inputIdentifier]: { value: enterValue, isValid: true },
      };
    });
  };
  const submitHandler = () => {
    const expenseData = {
      amount: +input.amount.value,
      date: new Date(input.date.value),
      description: input.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData?.date?.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData?.description?.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setInput((currentInputs) => {
        return {
          amount: { value: currentInputs.amount.value, isValid: amountIsValid },
          date: { value: currentInputs.date.value, isValid: dateIsValid },
          description: {
            value: currentInputs.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      Alert.alert("Invalid input", "Please check your input value!!!");
      return;
    }
    onSubmit(expenseData);
  };
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          label="Amount"
          invalid={!input.amount.isValid}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: input.amount.value,
          }}
          inputStyle={styles.rowInput}
        />
        <Input
          label="Date"
          invalid={!input.date.isValid}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: input.date.value,
          }}
          inputStyle={styles.rowInput}
        />
      </View>
      <Input
        label="Description"
        invalid={!input.description.isValid}
        textInputConfig={{
          //   autoCorrect: false,  // default is true
          autoCapitalize: "words", // default is none
          multiline: true,
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: input.description.value,
        }}
      />
      <View style={styles.buttonContainer}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: "center",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
