import React from "react";
import { ScrollView, View } from "react-native";
import { IconButton } from "@components/common/IconButton";
import MoonIcon from "@components/common/Icons/MoonIcon";
import SunIcon from "@components/common/Icons/SunIcon";
import { useThemeStyles } from "../styles";
import Text from "@components/common/Text";
import Button from "@components/common/Button";

export default () => {
  const styles = useThemeStyles();

  return (
    <View style={styles.bodyContainer}>
      <ScrollView style={styles.bodyScreenContainer}>
        <Text>Open up App.js to start working on your app! Test 13</Text>
        <Button title="Test" />
        <IconButton
          color={"brand"}
          icon={SunIcon}
          size={"xl"}
          px={"md"}
          rounded
        />
        <IconButton icon={MoonIcon} title="Test" />
      </ScrollView>
      <View style={styles.footerContainer}>
        <Text>Footer</Text>
        <Text>Open up App.js to start working on your app! Test 13</Text>
        <Button title="Test" />
        <IconButton
          color={"brand"}
          icon={SunIcon}
          size={"xl"}
          px={"md"}
          rounded
        />
        <IconButton icon={MoonIcon} title="Test" />
        <Text>Open up App.js to start working on your app! Test 13</Text>
        <Button title="Test" />
        <IconButton
          color={"brand"}
          icon={SunIcon}
          size={"xl"}
          px={"md"}
          rounded
        />
        <IconButton icon={MoonIcon} cta title="Test" />
        <IconButton icon={MoonIcon} title="Test" />
        <Text>Open up App.js to start working on your app! Test 13</Text>
        <Button title="Test" />
        <IconButton
          color={"brand"}
          icon={SunIcon}
          size={"xl"}
          px={"md"}
          rounded
        />
        <IconButton icon={MoonIcon} title="Test" />
      </View>
    </View>
  );
};
