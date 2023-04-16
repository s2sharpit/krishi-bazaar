import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import categoriesData from "../data/categoriesData";
import { Vegetables } from "../../assets";
import Nav from "../components/Nav";

export default function Products({navigation}: {navigation: any}) {

  const [products, setProducts] = useState([
    {
      id: "1",
      name: "Tomatoes",
      price: 40,
      image: Vegetables,
    },
    {
      id: "2",
      name: "Apples",
      price: 100,
      image: Vegetables,
    },
    {
      id: "3",
      name: "Potatoes",
      price: 20,
      image: Vegetables,
    },
    {
      id: "4",
      name: "Carrots",
      price: 60,
      image: Vegetables,
    },
    {
      id: "5",
      name: "Lettuce",
      price: 80,
      image: Vegetables,
    },
  ]);

  const Categories = ({ data, navigation }: { data: any; navigation: any }) => {
    return (
      <TouchableOpacity style={styles.circleWrapper}>
        <View style={styles.circle}>
          <Image source={data.image} style={styles.img} />
        </View>
        <Text style={styles.textCat}>{data.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderProductItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.productItemContainer} onPress={()=>navigation.navigate("ProductDetail")}>
      <Image style={styles.productItemImage} source={item.image} />
      <View style={styles.productItemDetails}>
        <Text style={styles.productItemName}>{item.name}</Text>
        <Text style={styles.productItemPrice}>₹{item.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* <Text>Products</Text> */}
      <View style={styles.searchBox}>
        <MaterialIcons name="search" size={22} color={"gray"} />
        <TextInput style={styles.input} placeholder="Search for Product..." />
      </View>
      <View style={styles.wrapper}>
        {categoriesData.map((data) => (
          <Categories key={data.id} data={data} navigation={navigation} />
        ))}
      </View>
      <View style={styles.products}>
        <FlatList
          data={products}
          renderItem={renderProductItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.productListContainer}
        />
      </View>
      <Nav navigation={navigation} />
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
  products: {
    flex: 1,
    // backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
    width: '100%',
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
  wrapper: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  circleWrapper: {
    alignItems: "center",
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
  img: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  textCat: {
    fontSize: 13,
    // fontWeight: "bold",
    // marginTop: 10,
  },
  productListContainer: {
    paddingBottom: 20,
  },
  productItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  productItemImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  productItemDetails: {
    marginLeft: 20,
  },
  productItemName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  productItemPrice: {
    fontSize: 16,
    marginTop: 5,
  },
});