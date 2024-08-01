import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesSummery from "./ExpensesSummery";
import ExpensesList from "./ExpensesList";
import { style } from "../../constants/style";
const dummy = [
  { id: "1", description: "full", amount: 24, date: new Date("2024-08-01") },
  { id: "2", description: "pan", amount: 5, date: new Date("2024-08-01") },
  { id: "3", description: "tea", amount: 20, date: new Date("2024-07-31") },
  { id: "4", description: "puri", amount: 20, date: new Date("2024-07-30") },
  { id: "5", description: "chips", amount: 10, date: new Date("2024-07-29") },
  { id: "6", description: "biscuit", amount: 30, date: new Date("2024-07-28") },
  { id: "7", description: "full", amount: 16, date: new Date("2024-07-29") },
  { id: "8", description: "tea", amount: 20, date: new Date("2024-07-25") },
  { id: "9", description: "car", amount: 100, date: new Date("2024-07-24") },
  { id: "10", description: "pan", amount: 5, date: new Date("2024-07-23") },
  { id: "11", description: "tea", amount: 16, date: new Date("2024-07-02") },
];
const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummery expenses={dummy} periodName={expensesPeriod} />
      <ExpensesList expenses={dummy} />
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
});
