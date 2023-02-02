import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "./src/components/common/Button";
import { IconButton } from "./src/components/common/IconButton";
import MoonIcon from "./src/components/common/Icons/MoonIcon";
import SunIcon from "./src/components/common/Icons/SunIcon";
import { AppContextProvider } from "./src/contexts/AppContext";

export default function App() {
  return (
    <AppContextProvider>
      <SafeAreaView style={styles.sav}>
        <StatusBar style="auto" />
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app! Test 12</Text>
          <Button title="Test" />
          <SunIcon color="blue" />
          <IconButton disabled icon={<SunIcon size={48} color="red" />} />
          <IconButton icon={<MoonIcon color="red" />} title="Test" />
        </View>
      </SafeAreaView>
    </AppContextProvider>
  );
}

const styles = StyleSheet.create({
  sav: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
