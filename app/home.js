import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Colors } from "../colors";
import Header from "../components/Header";
import Search from "../components/Search";
import Menus from "../components/Menus";
import Nearby from "../components/Nearby";
import Footer from "../components/Footer";
const home = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <Header />
      <Search />
      <Menus />
      <Nearby />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
  },
});
export default home;
