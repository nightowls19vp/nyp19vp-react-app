import * as React from "react";
import { View, Text } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RoutesName from "../../../constants/RoutesName";
import BottomNavigationBar from "../BottomNavigationBar";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName={RoutesName.HOME_TAB}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        options={{
          title: "Megoo",
          drawerLabel: "Trang chủ",
        }}
        name={RoutesName.HOME_TAB}
        component={BottomNavigationBar}
        initialParams={{ screen: RoutesName.HOME_TAB }}
      />
      <Drawer.Screen
        options={{
          title: "Megoo",
          drawerLabel: "Quản lý gói",
        }}
        name={RoutesName.PACKAGE}
        component={BottomNavigationBar}
        initialParams={{ screen: RoutesName.PACKAGE }}
      />
      <Drawer.Screen
        options={{
          title: "Megoo",
          drawerLabel: "Quản lý kho",
        }}
        name={RoutesName.STORAGE}
        component={BottomNavigationBar}
        initialParams={{ screen: RoutesName.STORAGE }}
      />
      <Drawer.Screen
        options={{
          title: "Megoo",
          drawerLabel: "Trang cá nhân",
        }}
        name={RoutesName.PROFILE}
        component={BottomNavigationBar}
        initialParams={{ screen: RoutesName.PROFILE }}
      />
      <Drawer.Screen
        options={{
          title: "Megoo",
          drawerLabel: "Cài đặt",
        }}
        name={RoutesName.SETTINGS}
        component={BottomNavigationBar}
        initialParams={{ screen: RoutesName.SETTINGS }}
      />
    </Drawer.Navigator>
  );
}
