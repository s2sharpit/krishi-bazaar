import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Logo } from "../../assets";
import categoriesData from "../data/categoriesData";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Nav from "../components/Nav";

export default function Home({ navigation }: { navigation: any }) {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        {categoriesData.map((data) => (
          <Categories key={data.id} data={data} />
        ))}
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>View All</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ProductDetail")}>
        <Text style={styles.buttonText}>Product</Text>
      </TouchableOpacity>
      <Nav navigation={navigation} />
    </View>
  );
}

function Categories({ data }: { data: any }) {
  return (
    <TouchableOpacity style={styles.categoryButton}>
      <Image style={styles.categoryIcon} source={data.image} />
      <Text style={styles.categoryText}>{data.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFEF",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
    height: "100%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    height: 35,
    padding: 5,
    paddingRight: 10,
    borderColor: "#ccc",
    borderRadius: 50,
    backgroundColor: "#EFEFEF",
  },
  input: {
    width: "90%",
    height: 35,
    padding: 5,
    paddingHorizontal: 10,
    // borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 50,
    backgroundColor: "#EFEFEF",
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  headerButton: {
    backgroundColor: "#EFEFEF",
    // padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 9999,
    height: 35,
    width: 35,
  },
  headerButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  body: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  categoryButton: {
    backgroundColor: "#fff",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    height: 120,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  categoryIcon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#35C759",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    width: "85%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
