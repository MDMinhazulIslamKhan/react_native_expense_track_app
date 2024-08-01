import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ManageExpenses from "./screens/ManageExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";
import { style } from "./constants/style";
import IconButton from "./ui/IconButton";
import ExpensesContextProvider from "./store/expenses-context";

export default function App() {
  const Stack = createNativeStackNavigator();
  const BottomTab = createBottomTabNavigator();
  const ExpensesOverview = () => {
    return (
      <BottomTab.Navigator
        screenOptions={({ navigation }) => ({
          headerStyle: { backgroundColor: style.colors.primary500 },
          headerTintColor: "white",
          tabBarStyle: { backgroundColor: style.colors.primary500 },
          tabBarActiveTintColor: style.colors.accent500,
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="add"
              size={24}
              color={tintColor}
              onPress={() => navigation.navigate("ManageExpenses")}
            />
          ),
        })}
      >
        <BottomTab.Screen
          name="RecentExpenses"
          component={RecentExpenses}
          options={{
            title: "Recent Expenses",
            tabBarLabel: "Recent",
            tabBarIcon: ({ color, size }) => (
              <Ionicons size={size} color={color} name="hourglass" />
            ),
          }}
        />
        <BottomTab.Screen
          name="AllExpenses"
          component={AllExpenses}
          options={{
            title: "All Expenses",
            tabBarLabel: "All Expenses",
            tabBarIcon: ({ color, size }) => (
              <Ionicons size={size} color={color} name="calendar" />
            ),
          }}
        />
      </BottomTab.Navigator>
    );
  };
  return (
    <>
      <StatusBar style="light" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: style.colors.primary500 },
              headerTintColor: "white",
            }}
          >
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageExpenses"
              component={ManageExpenses}
              options={{ title: "Manage Expenses", presentation: "modal" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}
