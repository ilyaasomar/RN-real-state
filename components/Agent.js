import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "../constants/colors";
import { useRouter } from "expo-router";
const Agent = () => {
  const router = useRouter();
  return (
    <>
      <View style={styles.footer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
            marginLeft: 15,
            marginRight: 15,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 50,
              }}
            >
              <FontAwesome name="user" size={45} color="gray" />
            </View>
            <View
              style={{
                flexDirection: "column",
                marginLeft: 10,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Ilyaas Omar
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialCommunityIcons name="star" size={24} color="#EA7E00" />
                <Text style={{ color: "gray", fontSize: 17 }}>4.8</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.secondary,
              paddingTop: 15,
              paddingBottom: 15,
              paddingLeft: 20,
              paddingRight: 20,
              borderRadius: 10,
            }}
            onPress={() => router.push("/")}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 15,
                textAlign: "center",
              }}
            >
              Create Account
            </Text>
          </TouchableOpacity>
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
    height: "15%",
    marginTop: 20,
  },
});
export default Agent;
