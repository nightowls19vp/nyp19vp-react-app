import { View, Text } from "react-native";
import { Stack, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
      <Stack.Screen></Stack.Screen>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default Home;
