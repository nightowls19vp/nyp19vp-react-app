import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { View, Text } from "react-native";
import RoutesName from "../../../constants/RoutesName";
import HomeScreen from "../../../screens/home/screens/HomeScreen";

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigationBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={RoutesName.HOME_TAB} component={HomeScreen} />
      <Tab.Screen name={RoutesName.SETTINGS} component={SettingsScreen} />
      <Tab.Screen name={RoutesName.PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  );
}
