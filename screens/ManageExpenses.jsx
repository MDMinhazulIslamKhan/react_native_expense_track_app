import { StyleSheet, View } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import IconButton from "../ui/IconButton";
import { style } from "../constants/style";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../component/ManageExpense/ExpenseForm";

const ManageExpenses = ({ route, navigation }) => {
  const expensesCtx = useContext(ExpensesContext);

  const editedExpensesId = route.params?.expensesId;
  const isEditing = !!editedExpensesId;

  const selectedExpenses = expensesCtx.expenses.find(
    (expense) => expense.id === editedExpensesId
  );

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

  const handleConfirm = (expenseData) => {
    if (isEditing) {
      expensesCtx.updateExpense(editedExpensesId, expenseData);
    } else {
      expensesCtx.addExpense(expenseData);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ExpenseForm
        defaultValues={selectedExpenses}
        onCancel={handleCancel}
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onSubmit={handleConfirm}
      />
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
});
