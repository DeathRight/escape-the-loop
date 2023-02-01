import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.sav}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app! Test</Text>
      </View>
    </SafeAreaView>
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
