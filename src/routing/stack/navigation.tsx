import {
  createNavigationContainerRef,
  NavigationContainer,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginPage } from "../../auth/login/login";
import Home from "../../home/user/user";
import BottomTabs from "../bottomTabs/bottomTabs";
import SingleCategory from "../../home/singleCategory/singleCategory";

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Category: { url: string };
};

export const navigationRef = createNavigationContainerRef<RootStackParamList>();
const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        id={undefined}
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen
          name="Home"
          component={BottomTabs}
          options={{ cardStyle: { backgroundColor: "transparent" } }}
        />
        <Stack.Screen name="Category" component={SingleCategory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
