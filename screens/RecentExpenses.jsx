import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../component/Expenses/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../utils/dateFormate";
import LoadingOverlay from "../ui/LoadingOverlay";

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  const [isLoading, setIsLoading] = useState(true);
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date > date7DaysAgo;
  });

  // for testing loading
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      emptyText="No Expenses in Last 7 days!!!"
    />
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({});
