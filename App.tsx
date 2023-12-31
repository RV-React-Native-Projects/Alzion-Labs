import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import { store } from "@src/redux/store";
// ======= Screens =======
import Home from "@screen/Home/Home";
import Details from "@screen/details/Details";

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <Provider store={store}>
          <AppNavigation />
        </Provider>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          animationEnabled: true,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
