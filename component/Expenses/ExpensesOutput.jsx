import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesSummery from "./ExpensesSummery";
import ExpensesList from "./ExpensesList";
import { style } from "../../constants/style";

const ExpensesOutput = ({ expenses, expensesPeriod, emptyText }) => {
  let content = <Text style={styles.info}>{emptyText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View style={styles.container}>
      <ExpensesSummery expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: style.colors.primary700,
  },
  info: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    marginTop: 52,
  },
});
