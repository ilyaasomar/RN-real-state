import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Image } from "react-native";
import house from "../assets/house.jpg";
import apartment from "../assets/apartment.jpg";
import town from "../assets/town.jpg";

import { Colors } from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default [
  {
    image: house,
    title: "House",
    description: "79 Pack Drive East Drive",
    address: "Flushing, New York 11367",
    iconOne: () => <Ionicons name="bed" size={24} color={Colors.secondary} />,
    noBed: "3",
    iconTwo: () => (
      <MaterialCommunityIcons
        name="shower"
        size={24}
        color={Colors.secondary}
      />
    ),
    noShower: "3",
    price: "$2,969/m",
  },
  {
    image: apartment,
    title: "apartment",
    description: "132 Lander Eve",
    address: "Staten Island, New York 10314",
    iconOne: () => <Ionicons name="bed" size={24} color={Colors.secondary} />,
    noBed: "2",
    iconTwo: () => (
      <MaterialCommunityIcons
        name="shower"
        size={24}
        color={Colors.secondary}
      />
    ),
    noShower: "2",
    price: "$2,969/m",
  },
  {
    image: town,
    title: "Townhouse",
    description: "80 Burnside Ave",
    address: "Silicon Valley, CL 18359",
    iconOne: () => <Ionicons name="bed" size={24} color={Colors.secondary} />,
    noBed: "4",
    iconTwo: () => (
      <MaterialCommunityIcons
        name="shower"
        size={24}
        color={Colors.secondary}
      />
    ),
    noShower: "3",
    price: "$3,613/m",
  },
  // {
  //   image: town,
  //   title: "Townhouse",
  //   description: "80 Burnside Ave",
  //   address: "Silicon Valley, CL 18359",
  //   iconOne: () => <Ionicons name="bed" size={24} color={Colors.secondary} />,
  //   noBed: "4",
  //   iconTwo: () => (
  //     <MaterialCommunityIcons
  //       name="shower"
  //       size={24}
  //       color={Colors.secondary}
  //     />
  //   ),
  //   noShower: "3",
  //   price: "$3,613/m",
  // },
];
