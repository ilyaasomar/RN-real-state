import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native";
const Search = () => {
  return (
    <View style={styles.search}>
      <Feather name="search" size={24} color="black" />
      <TextInput
        placeholder="Enter what you search"
        style={styles.input}
      ></TextInput>
    </View>
  );
};
const styles = StyleSheet.create({
  search: {
    flexDirection: "row",
    alignContent: "center",
    // backgroundColor: "#E0E3E8",
    backgroundColor: "#F1F1F1",
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  locationTitle: {
    color: "gray"
  },
  locationTxt: {
    fontWeight: "bold",
    fontSize: 20
  },
  input: {
    color: "white",
    fontSize: 16,
    marginLeft: 10
  }
});
export default Search;
