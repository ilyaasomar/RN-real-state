import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

const MonthlyCost = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, fontWeight: "bold", marginBottom: 15 }}>
        MonthlyCost
      </Text>
      <View style={styles.progressContainer}>
        <View style={styles.progressOne}></View>
        <View style={styles.progressTwo}></View>
        <View style={styles.progressThree}></View>
        <Text style={{ fontSize: 17, fontWeight: "bold", marginLeft: "auto" }}>
          $1,120
        </Text>
      </View>

      {/* text */}
      <View style={{ flexDirection: "column", gap: 10 }}>
        {/* shape & text */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <View
              style={{
                width: 15,
                height: 15,
                borderRadius: 50,
                backgroundColor: "#019BA3",
              }}
            ></View>
            <Text style={{ fontSize: 18 }}>Principle & Interest</Text>
          </View>
          <Text style={{ fontSize: 18, fontWeight: 500, marginLeft: "auto" }}>
            $840
          </Text>
        </View>
        {/*  */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <View
              style={{
                width: 15,
                height: 15,
                borderRadius: 50,
                backgroundColor: "#E8AF00",
              }}
            ></View>
            <Text style={{ fontSize: 18 }}>Home Tax</Text>
          </View>
          <Text style={{ fontSize: 18, fontWeight: 500, marginLeft: "auto" }}>
            $224
          </Text>
        </View>
        {/*  */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <View
              style={{
                width: 15,
                height: 15,
                borderRadius: 50,
                backgroundColor: "#255CAF",
              }}
            ></View>
            <Text style={{ fontSize: 18 }}>Home Insurance</Text>
          </View>
          <Text style={{ fontSize: 18, fontWeight: 500, marginLeft: "auto" }}>
            $56
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 30,
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginBottom: 15,
  },
  progressOne: {
    width: 170,
    height: 10,
    backgroundColor: "#019BA3",
    borderRadius: 20,
  },
  progressTwo: {
    width: 70,
    height: 10,
    backgroundColor: "#E8AF00",
    borderRadius: 20,
  },
  progressThree: {
    width: 50,
    height: 10,
    backgroundColor: "#255CAF",
    borderRadius: 20,
  },
});
export default MonthlyCost;
