import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./app/screens/login/screens/LoginScreen";
import RegisterScreen from "./app/screens/register/screens/RegisterScreen";
import RoutesName from "./app/constants/RoutesName";
import DrawerNavigation from "./app/common/components/DrawerNavigation";
import BottomNavigationBar from "./app/common/components/BottomNavigationBar";

const Stack = createNativeStackNavigator();

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      console.log("App load async");

      try {
        await Font.loadAsync(
          "antoutline",
          // eslint-disable-next-line
          require("@ant-design/icons-react-native/fonts/antoutline.ttf")
        );

        await Font.loadAsync(
          "antfill",
          // eslint-disable-next-line
          require("@ant-design/icons-react-native/fonts/antfill.ttf")
        );

        console.log("Font loaded");
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();

      // If you want to show the splash screen until some async work is done,
      // you can do that here. Make sure to call `SplashScreen.hideAsync()`
      // when the work is done!
      console.log("Splash screen hidden");
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={RoutesName.LOGIN} component={LoginScreen} />
        <Stack.Screen name={RoutesName.REGISTER} component={RegisterScreen} />
        <Stack.Screen
          name={RoutesName.HOME_DRAWER}
          component={DrawerNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
