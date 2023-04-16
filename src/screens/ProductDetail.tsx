import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Vegetables } from "../../assets";

const ProductDetail = ({ navigation }: { navigation: any}) => {
  const { id, name, image, description, price, quantity, seller } = {
    id: 1,
    name: "Organic Apples",
    price: 110,
    quantity: 10,
    description:
      "Fresh and delicious organic apples grown locally in the valley.",
    image: Vegetables,
    seller: {
      id: 123,
      name: "Green Valley Farm",
      location: "123 Main St, Green Valley, CA",
      rating: 4.5,
      reviews: 25,
    },
  };


  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <View style={styles.contentContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>Price: ₹{price}</Text>
        <Text style={styles.quantity}>Quantity: {quantity}</Text>
        <View style={styles.sellerContainer}>
          <Text style={styles.seller}>Sold by:</Text>
          <Text style={styles.sellerName}>{seller.name}</Text>
          <Text style={styles.sellerLocation}>{seller.location}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>Rating:</Text>
            <Text style={styles.ratingValue}>{seller.rating}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Cart")}
        >
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef",
  },
  image: {
    width: "100%",
    height: 300,
  },
  contentContainer: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  quantity: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  sellerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  seller: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  sellerName: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 5,
  },
  sellerLocation: {
    fontSize: 16,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },
  rating: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 5,
  },
  ratingValue: {
    fontSize: 16,
  },
  button: {
    backgroundColor: "#008000",
    padding: 14,
    borderRadius: 5,
    alignSelf: "center",
    width: 300,
    marginTop: 40,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default ProductDetail;
