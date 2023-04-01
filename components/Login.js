import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../colors";
import airbnb from "../assets/airbnb.png";
import { useRouter } from "expo-router";
const Login = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image source={airbnb} style={styles.image} />
      <View style={styles.footer}>
        <Text style={styles.title}>
          Housoo is relmagining real estate to make it easer to unlock life next
          chapter.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/register")}
        >
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
        <View style={styles.accountText}>
          <Text style={styles.haveAcc}>Have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/home")}>
            <Text style={styles.login}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: Colors.primary
  },
  image: {
    width: "100%",
    height: "30%",
    maxHeight: "100%",
    // backgroundColor: "green",
    padding: 50,
    marginTop: 200
  },
  footer: {
    marginTop: "auto",
    marginBottom: 50
  },
  title: {
    fontSize: 18,
    fontWeight: "normal",
    textAlign: "center",
    color: "gray"
  },

  button: {
    backgroundColor: Colors.secondary,
    marginTop: 30,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 10
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center"
  },
  accountText: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "center"
  },
  haveAcc: {
    color: "gray"
  },
  login: {
    color: Colors.secondary,
    fontWeight: "bold"
  }
});
export default Login;
