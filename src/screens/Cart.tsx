import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Cart ({ navigation }: { navigation: any }) {
  const data = [
    { id: '1', name: 'Organic Apples', quantity: '2', price: '$5.99' },
    { id: '2', name: 'Fresh Tomatoes', quantity: '1', price: '$3.49' },
    { id: '3', name: 'Local Honey', quantity: '3', price: '$8.99' },
  ];

  const renderItem = ({ item }: {item: any}) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemLeft}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
      <View style={styles.itemRight}>
        <TouchableOpacity style={styles.itemButton}>
          <Text style={styles.itemButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.itemQuantity}>{item.quantity}</Text>
        <TouchableOpacity style={styles.itemButton}>
          <Text style={styles.itemButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Cart</Text>
        </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: $22.46</Text>
        <TouchableOpacity style={styles.checkoutButton} onPress={()=>navigation.navigate("Payment")}>
          <Text style={styles.checkoutButtonText}>Proceed to Buy</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 10,
  },
  itemLeft: {
    flexDirection: "column",
  },
  itemName: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 14,
    color: "#888888",
  },
  itemRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemButton: {
    backgroundColor: "#EFEFEF",
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  itemButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#555555",
  },
  itemQuantity: {
    fontSize: 16,
    fontWeight: "600",
    marginHorizontal: 10,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#DDDDDD",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "600",
  },
  checkoutButton: {
    backgroundColor: "#008000",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  checkoutButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
});