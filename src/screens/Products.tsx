import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Products() {
  return (
    <View style={styles.container}>
      {/* <Text>Products</Text> */}
      <View style={styles.searchBox}>
        <MaterialIcons name="search" size={22} color={"gray"} />
        <TextInput style={styles.input} placeholder='Search for Product...' />
      </View>
      <View>

      <View style={styles.circleWrapper}>
        <View style={styles.circle}></View>
        <Text style={styles.textCat}>Vegetables</Text>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFEF",
    alignItems: "center",
    justifyContent: "flex-start",
    // paddingTop: 20,
    height: "100%",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    paddingHorizontal: 10,
    marginBottom: 20,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "gray",
    backfaceVisibility: "visible",
  },
  input: {
    width: "100%",
    height: 40,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#000",
  },
  circleWrapper: {
    alignItems: 'center',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textCat: {
    fontSize: 13,
    // fontWeight: "bold",
    marginTop: 10,
  }
});