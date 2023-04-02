import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import house from "../assets/house.jpg";
import { Colors } from "../constants/colors";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HouseDetails = () => {
  const router = useRouter();
  return (
    <>
      <View style={styles.container}>
        {/* image */}
        {/* <Text>Image</Text> */}
        <Image source={house} style={styles.image} resizeMode="cover" />
        {/* back and show details */}
        <View style={styles.circleContainer}>
          <View style={styles.flexAccept}>
            <View style={styles.circle}>
              <Feather
                name="arrow-left"
                size={35}
                color="gray"
                onPress={() => router.back()}
              />
            </View>
            {/* <View style={styles.circle}>
            <MaterialCommunityIcons
            name="dots-horizontal"
            size={35}
            color="gray"
            />
        </View> */}
          </View>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.subTitle}>
            <Text style={styles.titleOne}>House</Text>
            <MaterialIcons name="favorite" size={35} color={Colors.secondary} />
          </View>
          <Text style={styles.titleTwo}>50 Clonical Spring Rd</Text>
          <Text style={styles.subTitleTwo}>Wyandanch, New York 11789</Text>
          <View style={styles.facilities}>
            <View style={styles.subFacilities}>
              <Ionicons name="bed" size={30} color={Colors.secondary} />
              <Text style={{ fontSize: 20, fontWeight: 500 }}>3</Text>
              <Text style={{ fontSize: 20, fontWeight: 500 }}>bedrooms</Text>
            </View>

            <View style={styles.subFacilities}>
              <MaterialCommunityIcons
                name="shower"
                size={30}
                color={Colors.secondary}
              />
              <Text style={{ fontSize: 20, fontWeight: 500 }}>3</Text>
              <Text style={{ fontSize: 20, fontWeight: 500 }}>bathrooms</Text>
            </View>

            <View style={styles.subFacilities}>
              <MaterialCommunityIcons
                name="vector-square"
                size={30}
                color={Colors.secondary}
              />
              <Text style={{ fontSize: 20, fontWeight: 500 }}>3212</Text>
              <Text style={{ fontSize: 20, fontWeight: 500 }}>SQFT</Text>
            </View>

            <View style={styles.subFacilities}>
              <MaterialCommunityIcons
                name="garage-variant"
                size={30}
                color={Colors.secondary}
              />
              <Text style={{ fontSize: 20, fontWeight: 500 }}>3</Text>
              <Text style={{ fontSize: 20, fontWeight: 500 }}>bedrooms</Text>
            </View>
          </View>
          <View style={styles.hr}></View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    position: "relative",
  },
  image: {
    width: "100%",
    height: 300,
  },
  circleContainer: {
    position: "absolute",
    marginTop: 50,
    marginLeft: 10,
  },
  flexAccept: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  circle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 45,
    height: 45,
    backgroundColor: "white",
    // backgroundColor: Colors.secondary,
    borderRadius: "100%",
  },
  textContainer: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  subTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleOne: {
    fontSize: 20,
    color: Colors.secondary,
    fontWeight: 400,
  },
  titleTwo: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subTitleTwo: {
    fontSize: 18,
    fontWeight: 400,
    color: "gray",
    marginBottom: 8,
  },
  facilities: {
    marginTop: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingRight: 20,
    gap: 15,
    marginBottom: 15,
  },
  subFacilities: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  hr: {
    width: "100%",
    height: 1,
    backgroundColor: "#E0E3E8",
    marginTop: 10,
  },
});

export default HouseDetails;
