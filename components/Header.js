import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
const Header = () => {
  return (
    <>
      <Stack.Screen options={{ title: "" }} />
      <View style={styles.container}>
        <View>
          <Text style={styles.locationTitle}>Your Locaiton</Text>
          <Text style={styles.locationTxt}>Apalachin, NY</Text>
        </View>
        <MaterialIcons name="notifications" size={30} color="black" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15
  },
  locationTitle: {
    color: "gray"
  },
  locationTxt: {
    fontWeight: "bold",
    fontSize: 20
  }
});
export default Header;
