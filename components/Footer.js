import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
const Footer = () => {
  return (
    <View style={styles.footer}>
      <View>
        <MaterialIcons name="explore" size={24} color="black" />
        <Text>Explore</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#E0E3E8",
    marginBottom: "auto",
    fixed: true,
    width: "100%",
    marginTop: "auto",
    marginTop: 20,
    height: "15%",
  },
});
export default Footer;
