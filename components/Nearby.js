import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Image } from "react-native";
import house from "../assets/house.jpg";
import apartment from "../assets/apartment.jpg";
import town from "../assets/town.jpg";

import { Colors } from "../colors";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Nearby = () => {
  return (
    <>
      <View style={styles.hr}></View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Nearby</Text>
        {/* propery one */}
        <View style={styles.container}>
          {/* image */}
          <Image source={house} style={styles.image} resizeMode="cover" />
          {/* text view */}
          <View style={styles.subContainer}>
            <View style={styles.subtitiles}>
              <Text style={styles.house}>House</Text>
              <Text style={styles.desc}>79 Pack Drive East Drive</Text>
              <Text style={styles.address}>Flushing, New York 11367</Text>
            </View>
            {/* icons */}
            <View style={styles.subFooter}>
              <View style={styles.icon}>
                {/* icons */}
                <Ionicons name="bed" size={24} color={Colors.secondary} />
                <MaterialCommunityIcons
                  name="shower"
                  size={24}
                  color={Colors.secondary}
                />
              </View>
              <Text style={styles.price}>$2,969/m</Text>
            </View>
          </View>
        </View>
        {/* propery two */}
        <View style={styles.container}>
          {/* image */}
          <Image source={apartment} style={styles.image} resizeMode="cover" />
          {/* text view */}
          <View style={styles.subContainer}>
            <View style={styles.subtitiles}>
              <Text style={styles.house}>House</Text>
              <Text style={styles.desc}>79 Pack Drive East Drive</Text>
              <Text style={styles.address}>Flushing, New York 11367</Text>
            </View>
            {/* icons */}
            <View style={styles.subFooter}>
              <View style={styles.icon}>
                {/* icons */}
                <Ionicons name="bed" size={24} color={Colors.secondary} />
                <MaterialCommunityIcons
                  name="shower"
                  size={24}
                  color={Colors.secondary}
                />
              </View>
              <Text style={styles.price}>$2,969/m</Text>
            </View>
          </View>
        </View>
        {/* propery three */}
        <View style={styles.container}>
          {/* image */}
          <Image source={town} style={styles.image} resizeMode="cover" />
          {/* text view */}
          <View style={styles.subContainer}>
            <View style={styles.subtitiles}>
              <Text style={styles.house}>House</Text>
              <Text style={styles.desc}>79 Pack Drive East Drive</Text>
              <Text style={styles.address}>Flushing, New York 11367</Text>
            </View>
            {/* icons */}
            <View style={styles.subFooter}>
              <View style={styles.icon}>
                {/* icons */}
                <Ionicons name="bed" size={24} color={Colors.secondary} />
                <MaterialCommunityIcons
                  name="shower"
                  size={24}
                  color={Colors.secondary}
                />
              </View>
              <Text style={styles.price}>$2,969/m</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  hr: {
    width: "100%",
    height: 1,
    backgroundColor: "#E0E3E8",
    marginTop: 10,
  },
  wrapper: {
    backgroundColor: "white",
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  container: {
    borderColor: "#E0E3E8",
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: 10,
    marginTop: 20,
    flexDirection: "row",
    padding: 8,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 10,
  },
  subContainer: {
    flexDirection: "column",
  },
  subtitiles: {
    marginLeft: 20,
    textAlign: "center",
    flexDirection: "column",
    gap: 2,
  },
  house: {
    color: Colors.secondary,
    fontSize: 17,
  },
  desc: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  address: {
    color: "gray",
    fontSize: 17,
  },
  subFooter: {
    marginTop: 20,
    flexDirection: "row",
    marginLeft: 20,
  },
  icon: {
    flexDirection: "row",
    gap: 20,
  },
  price: {
    marginLeft: "auto",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default Nearby;
