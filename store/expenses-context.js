const { createContext, useReducer } = require("react");
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
export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});
const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    }
    case "UPDATE": {
      const updateExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updateExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updateExpenses = [...state];
      updateExpenses[updateExpenseIndex] = updatedItem;
      return updateExpenses;
    }
    case "DELETE": {
      return state.filter((expense) => expense.id !== action.payload);
    }

    default:
      return state;
  }
};
const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, dummy);
  const addExpense = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };
  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };
  const updateExpense = (id, expenseData) => {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  };

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
