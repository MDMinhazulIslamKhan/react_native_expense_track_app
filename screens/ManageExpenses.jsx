import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import IconButton from "../ui/IconButton";
import { style } from "../constants/style";
import Button from "../ui/Button";
import { ExpensesContext } from "../store/expenses-context";

const ManageExpenses = ({ route, navigation }) => {
  const expensesCtx = useContext(ExpensesContext);

  const editedExpensesId = route.params?.expensesId;
  const isEditing = !!editedExpensesId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);
  const handleDelete = () => {
    expensesCtx.deleteExpense(editedExpensesId);
    navigation.goBack();
  };
  const handleCancel = () => {
    navigation.goBack();
  };
  const confirmCancel = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} mode="flat" onPress={handleCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmCancel}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={style.colors.error500}
            size={36}
            onPress={handleDelete}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: style.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderColor: style.colors.primary200,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
