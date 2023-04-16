import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Fruits, Vegetables } from '../../assets';

export default function Cart({ navigation }: { navigation: any}) {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Organic Apples',
      image: Fruits,
      price: 110,
      quantity: 2,
    },
    {
      id: 2,
      name: 'Fresh Carrots',
      image: Vegetables,
      price: 60,
      quantity: 3,
    },
  ]);

  const handleRemoveItem = (item: any) => {
    const newCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(newCartItems);
  };

  const handleQuantityChange = (item: any, value: number) => {
    const newCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity + value };
      }
      return cartItem;
    });
    setCartItems(newCartItems);
  };

  const renderCartItem = (item: any) => {
    return (
      <View key={item.id} style={styles.cartItem}>
        <Image source={item.image} style={styles.itemImage} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
          <View style={styles.quantityControl}>
            <TouchableOpacity disabled={item.quantity<=1} style={styles.quantityButton} onPress={() => handleQuantityChange(item, -1)}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{item.quantity}</Text>
            <TouchableOpacity style={styles.quantityButton} onPress={() => handleQuantityChange(item, 1)}>
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.removeButton} onPress={() => handleRemoveItem(item)}>
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderEmptyCart = () => {
    return (
      <View style={styles.emptyCart}>
        <Text style={styles.emptyCartText}>Your cart is empty</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.cartList}>
        {cartItems.length > 0 ? cartItems.map(renderCartItem) : renderEmptyCart()}
      </View>
      <View style={styles.totalSection}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalAmount}>
          ₹{cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
        </Text>
      </View>
      <TouchableOpacity style={styles.checkoutButton} onPress={()=>navigation.navigate("Payment")}>
        <Text style={styles.checkoutButtonText}>Proceed to checkout</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef",
    padding: 20,
  },
  cartList: {
    flex: 1,
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 5,
  },
  itemImage: {
    width: 80,
    height: 80,
    marginRight: 20,
    borderRadius: 40,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  itemPrice: {
    fontSize: 16,
    color: "#888",
    marginBottom: 10,
  },
  quantityControl: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    backgroundColor: "#eee",
    borderRadius: 5,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#444",
  },
  quantity: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  removeButton: {
    backgroundColor: "#ff6666",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  removeButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  emptyCart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyCartText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#888",
  },
  totalSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingTop: 20,
    paddingBottom: 10,
    marginTop: 20,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#33c37d",
  },
  checkoutButton: {
    backgroundColor: "#33c37d",
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    marginTop: 20,
  },
  checkoutButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
