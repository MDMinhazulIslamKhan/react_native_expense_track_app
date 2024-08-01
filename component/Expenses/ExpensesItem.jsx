import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { style } from "../../constants/style";
import { formateDate } from "../../utils/dateFormate";
import { useNavigation } from "@react-navigation/native";

const ExpensesItem = ({ id, description, amount, date }) => {
  const navigation = useNavigation();
  const expensesPressHandler = () => {
    navigation.navigate("ManageExpenses", { expensesId: id });
  };
  return (
    <Pressable
      style={({ pressed }) => [styles.expensesItem, pressed && styles.pressed]}
      onPress={expensesPressHandler}
      android_ripple={{ color: style.colors.primary50 }}
    >
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
  pressed: {
    opacity: 0.75,
  },
});
