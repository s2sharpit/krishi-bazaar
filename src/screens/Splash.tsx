import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { SplashImg } from "../../assets";

const SplashScreen = ({ navigation }: {navigation: any}) => {
  useEffect(() => {
    // setTimeout(() => {
      navigation.replace("Home");
    // }, 3000); // change the time as per your requirement
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
      <Text style={styles.title}>Krishi Bazaar</Text>
      <Image style={styles.img} source={SplashImg} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
    paddingTop: 200,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 30,
    // borderColor: 'red',
    // borderStyle: "dotted",
    // borderWidth: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    color: '#4e4e4e',
  },
  img: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "45%",
    marginTop: 20,
  },
});

export default SplashScreen;
