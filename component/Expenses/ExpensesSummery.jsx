import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { style } from "../../constants/style";

const ExpensesSummery = ({ expenses, periodName }) => {
  const expensesSum = expenses?.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum?.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummery;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: style.colors.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 3,
  },
  period: {
    fontSize: 12,
    color: style.colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: style.colors.primary500,
  },
});
