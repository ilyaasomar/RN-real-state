import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import React from "react";
import { Entypo } from "@expo/vector-icons";
import MenuLinks from "../constants/MenuLinks";
const Menus = () => {
  return (
    <>
      <View horizontal={true} showsHorizontalScrollIndicator={false}>
        <FlatList
          data={MenuLinks}
          horizontal
          renderItem={({ item }) => (
            <View style={styles.wrapper}>
              {/* container */}
              <TouchableOpacity style={styles.container}>
                {/* circle */}
                <View style={styles.circle}>
                  {/* icon */}
                  {item.icon ? (
                    <item.icon />
                  ) : (
                    <MaterialCommunityIcons
                      name={item.iconName}
                      size={30}
                      color="red"
                    />
                  )}
                </View>
                {/* text */}
                <Text style={styles.text}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
  },

  container: {
    flexDirection: "column",
    alignItems: "center",
    gap: 7,
  },
  circle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: "100%",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "gray",
  },
  icon: {},
  text: {
    fontSize: 18,
    color: "black",
  },
});
export default Menus;
