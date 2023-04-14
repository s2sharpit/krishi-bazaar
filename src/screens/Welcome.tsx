import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Signup from "../components/Signup";
import Login from "../components/Login";
import { Logo } from "../../assets";

export default function Welcome() {
  const [isLogin, setIsLogin] = useState(false);

  const login = {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: isLogin ? -340 : 0,
    width: "100%",
    height: 430,
    backgroundColor: "forestgreen",
    paddingBottom: 100,
    gap: 20,
    borderTopLeftRadius: 200 / 2,
    borderTopRightRadius: 200 / 2,
  };

  
  const s_title = {
    fontSize: isLogin ? 32 : 24,
    fontWeight: "bold",
    marginBottom: 20,
  }

  const l_title = {
    fontSize: isLogin ? 24 : 32,
    fontWeight: "bold",
    marginBottom: 20,
    color: 'white',
  };

  return (
    <View style={styles.wrapper}>
      <Image source={Logo} style={styles.img} />
      <View style={styles.container}>
        <View style={styles.signup}>
          <Text style={s_title} onPress={() => setIsLogin(true)}>
            Sign Up
          </Text>
          <Signup />
        </View>
        <View style={login}>
          <Text style={l_title} onPress={() => setIsLogin(false)}>
            Login
          </Text>
          <Login />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
  },
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 550,
    // borderTopStartRadius: 900 / 5,
  },
  img: {
    width: 300,
    height: 300,
    marginTop: 100,
  },
  signup: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    paddingBottom: 70,
    gap: 20,
  },
});
