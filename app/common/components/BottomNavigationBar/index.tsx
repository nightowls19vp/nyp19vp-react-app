// import Icon from "@ant-design/react-native/lib/icon";
import Icon from "react-native-vector-icons/AntDesign";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable } from "react-native";
import { Colors } from "../../../constants/Colors";
import RoutesName from "../../../constants/RoutesName";
import HomeScreen from "../../../screens/home/screens/HomeScreen";
import DrawerNavigation from "../DrawerNavigation";
import ProfileScreen from "../../../screens/profile/screens/ProfileScreen";
import EditProfileScreen from "../../../screens/profile/screens/EditProfileScreen";
import styles from "./../../../screens/profile/screens/EditProfileScreen/styles/styles";

function PackageScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Package!</Text>
    </View>
  );
}

function StorageScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Storage!</Text>
    </View>
  );
}

const ProfileStack = createNativeStackNavigator();

function ProfileScreenStack() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name={RoutesName.PROFILE}
        component={ProfileScreen}
      />
      <ProfileStack.Screen
        name={RoutesName.EDIT_PROFILE}
        component={EditProfileScreen}
      />
    </ProfileStack.Navigator>
  );
}

function SettingsScreen({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function BottomNavigationBar() {
  return (
    <Tab.Navigator
      initialRouteName={RoutesName.HOME_TAB}
      screenOptions={{
        // headerLeft: (props) => (
        //   <Pressable style={{ paddingLeft: 15 }}>
        //     <Icon name="bars" size={22} color={Colors.primary} />
        //   </Pressable>
        // ),
        // headerRight: (props) => (
        //   <Pressable style={{ paddingRight: 15 }}>
        //     <Icon name="search1" size={22} color={Colors.primary} />
        //   </Pressable>
        // ),
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: { paddingBottom: 6 },
        tabBarActiveTintColor: Colors.primary,
        tabBarStyle: {
          height: 50,
          paddingBottom: 0,
        },
      }}
    >
      <Tab.Screen
        name={RoutesName.PACKAGE}
        component={PackageScreen}
        options={{
          tabBarActiveTintColor: Colors.primary,
          tabBarIcon: ({ color }) => {
            return <Icon name="addusergroup" size={22} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name={RoutesName.STORAGE}
        component={StorageScreen}
        options={{
          tabBarActiveTintColor: Colors.primary,
          tabBarIcon: ({ color }) => {
            return <Icon name="isv" size={20} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name={RoutesName.HOME_TAB}
        component={HomeScreen}
        options={{
          tabBarActiveTintColor: Colors.primary,
          tabBarIcon: ({ color }) => {
            return <Icon name="home" size={20} color={color} />;
          },
        }}
      />

      <Tab.Screen
        name={RoutesName.PROFILE_STACK}
        component={ProfileScreenStack}
        options={{
          title: "Trang cá nhân",
          tabBarIcon: ({ color }) => {
            return <Icon name="user" size={20} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name={RoutesName.SETTINGS}
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => {
            return <Icon name="setting" size={20} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
