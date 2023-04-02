import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Stack } from "expo-router";
const Footer = () => {
  return (
    <>
      <Stack.Screen options={{}} />
      <View style={styles.footer}>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <MaterialIcons name="explore" size={30} color="gray" />
            <Text style={styles.text}>Explore</Text>
          </View>
          <View style={styles.wrapper}>
            <MaterialIcons name="favorite" size={30} color="gray" />
            <Text style={styles.text}>Favorite</Text>
          </View>
          <View style={styles.wrapper}>
            <FontAwesome name="inbox" size={30} color="gray" />
            <Text style={styles.text}>Index</Text>
          </View>
          <View style={styles.wrapper}>
            <FontAwesome name="user" size={30} color="gray" />
            <Text style={styles.text}>Profile</Text>
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#F4F4F4",
    marginBottom: "auto",
    fixed: true,
    width: "100%",
    marginTop: "auto",
    marginTop: 20,
    height: "15%",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 10,
  },
  wrapper: {
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
  },
  text: {
    fontSize: 17,
    fontWeight: 400,
  },
});
export default Footer;
