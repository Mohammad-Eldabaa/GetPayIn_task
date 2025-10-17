import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import tabs from "./Tabs";
import { TabsSytle } from "../../styles/TabsStyle";
import { useEffect } from "react";

export type BottomTabsParamList = {
  Categories: undefined;
  AllProduct: undefined;
  MyAccount: undefined;
};

const Tab = createBottomTabNavigator<BottomTabsParamList>();

function BottomTabs() {
  return (
    <Tab.Navigator
      id={undefined}
      initialRouteName="Categories"
      screenOptions={{
        tabBarStyle: TabsSytle.tabBarStyle,
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#3cace8ff",
        tabBarLabelStyle: TabsSytle.tabBarLabelStyle,
        headerShown: false,
      }}
    >
      {tabs.map((tab) => (
        <Tab.Screen
          key={tab.name}
          name={tab.name as keyof BottomTabsParamList}
          component={tab.component}
          options={{
            title: tab.title,
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name={tab.icon as keyof typeof Ionicons.glyphMap}
                size={size}
                color={color}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

export default BottomTabs;
