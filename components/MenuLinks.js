import { View, Text } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Colors } from "../colors";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default [
  {
    name: "Home",
    icon: () => <Entypo name="home" size={30} color={Colors.secondary} />,
    href: "/home",
  },
  {
    name: "Apartment",
    icon: () => <FontAwesome name="building" size={30} color="#019BA3" />,
    href: "/apartment",
  },
  {
    name: "Land",
    icon: () => <Fontisto name="propeller-4" size={30} color="#EA7E00" />,
    href: "/land",
  },
  {
    name: "Townhouse",
    icon: () => (
      <MaterialCommunityIcons
        name="office-building-marker"
        size={30}
        color="#245AB0"
      />
    ),
    href: "/townhouse",
  },

  // #245AB0
  //   {
  //     name: "",
  //     iconName: "",
  //     href: ""
  //   }
];
