import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { Image } from "react-native";
import { Colors } from "../constants/colors";
import Property from "../constants/Property";
import { Pressable } from "react-native";
import { useRouter } from "expo-router";
const Nearby = () => {
  const router = useRouter();
  return (
    <>
      <View style={styles.hr}></View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Nearby</Text>
        {/* propery one */}
        <FlatList
          data={Property}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => router.push("/houseDetails")}
              style={styles.container}
            >
              {/* image */}
              <Image
                source={item.image}
                style={styles.image}
                resizeMode="cover"
              />
              {/* text view */}
              <View style={styles.subContainer}>
                <View style={styles.subtitiles}>
                  <Text style={styles.house}>{item.title}</Text>
                  <Text style={styles.desc}>{item.description}</Text>
                  <Text style={styles.address}>{item.address}</Text>
                </View>
                {/* icons */}
                <View style={styles.subFooter}>
                  <View>
                    <View style={styles.icon}>
                      {/* icons */}
                      <View style={styles.innerIcon}>
                        <item.iconOne />
                        <Text style={styles.numbers}>{item.noBed}</Text>
                      </View>
                      <View style={styles.innerIcon}>
                        <item.iconTwo />
                        <Text style={styles.numbers}>{item.noShower}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={{ marginLeft: 50 }}>
                    <Text style={styles.price}>{item.price}</Text>
                  </View>
                </View>
              </View>
            </Pressable>
          )}
        />
        {/* propery two */}
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    flexDirection: "row",
    marginLeft: 20,
  },
  icon: {
    flexDirection: "row",
    gap: 20,
  },
  innerIcon: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  numbers: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    // marginLeft: "auto",
    fontWeight: 400,
    fontSize: 20,
  },
});

export default Nearby;
