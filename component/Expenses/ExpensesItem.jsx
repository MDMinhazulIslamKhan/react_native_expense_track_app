import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { style } from "../../constants/style";
import { formateDate } from "../../utils/dateFormate";

const ExpensesItem = ({ description, amount, date }) => {
  return (
    <Pressable style={styles.expensesItem}>
      <View>
        <Text style={[styles.textBase, styles.description]}>{description}</Text>
        <Text style={styles.textBase}>{formateDate(date)}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amount}>{amount?.toFixed(2)}</Text>
      </View>
    </Pressable>
  );
};

export default ExpensesItem;

const styles = StyleSheet.create({
  expensesItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: style.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
  },
  textBase: {
    color: style.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 60,
  },
  amount: {
    color: style.colors.primary500,
    fontWeight: "bold",
  },
});
