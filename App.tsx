import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AppComponent from "./src/components/app/App";
import { AppContextProvider } from "./src/contexts/AppContext";

export default function App() {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <SafeAreaProvider>
          <AppComponent />
        </SafeAreaProvider>
      </NavigationContainer>
    </AppContextProvider>
  );
}
