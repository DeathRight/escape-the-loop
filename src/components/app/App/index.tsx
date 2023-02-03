import React from "react";
import { View } from "react-native";
import { useThemeStyles } from "../styles";
import Body from "../Body";
import ThemeButton from "../ThemeButton";
import { useAppContext } from "@contexts/AppContext";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default () => {
  const styles = useThemeStyles();
  const { darkMode } = useAppContext();

  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar style={darkMode ? "light" : "dark"} />
      <View style={styles.headerContainer}>
        <ThemeButton />
      </View>
      <Body />
    </SafeAreaView>
  );
};
