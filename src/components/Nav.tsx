import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Nav({ navigation }: { navigation: any }) {
  return (
    <View style={styles.nav}>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Home")}
      >
        <MaterialIcons name="home" size={24} color={"black"} />
        <Text style={styles.title}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Products")}
      >
        <MaterialIcons name="grass" size={24} color={"black"} />
        <Text style={styles.title}>Product</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Cart")}
      >
        <MaterialIcons name="shopping-cart" size={24} color={"black"} />
        <Text style={styles.title}>Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Profile")}
      >
        <MaterialIcons name="person" size={24} color={"black"} />
        <Text style={styles.title}>My Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    paddingHorizontal: 32,
    marginBottom: 20,
    height: 55,
    bottom: 0,
    backgroundColor: "#fff",
    borderRadius: 40,
    backfaceVisibility: "visible",
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
  },
  title: {
    fontSize: 13,
  },
});