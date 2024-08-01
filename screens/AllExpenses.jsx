import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ExpensesOutput from "../component/Expenses/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod="Total"
      emptyText="No Registered Expenses found!!!"
    />
  );
};

export default AllExpenses;

const styles = StyleSheet.create({});
