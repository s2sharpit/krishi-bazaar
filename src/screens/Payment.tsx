import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function Payment () {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePayment = () => {
    // handle payment logic here
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>
        Payment Details
      </Text>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ marginBottom: 5 }}>Card Number</Text>
        <TextInput
          style={{ backgroundColor: "#f0f0f0", padding: 10, borderRadius: 5 }}
          onChangeText={setCardNumber}
          value={cardNumber}
          keyboardType="numeric"
          placeholder="1234 5678 9012 3456"
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <View style={{ flex: 1, marginRight: 10 }}>
          <Text style={{ marginBottom: 5 }}>Expiry Date</Text>
          <TextInput
            style={{ backgroundColor: "#f0f0f0", padding: 10, borderRadius: 5 }}
            onChangeText={setExpiryDate}
            value={expiryDate}
            keyboardType="numeric"
            placeholder="MM/YY"
          />
        </View>
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={{ marginBottom: 5 }}>CVV</Text>
          <TextInput
            style={{ backgroundColor: "#f0f0f0", padding: 10, borderRadius: 5 }}
            onChangeText={setCvv}
            value={cvv}
            keyboardType="numeric"
            placeholder="123"
          />
        </View>
      </View>
      <TouchableOpacity
        style={{ backgroundColor: "#00bfff", padding: 15, borderRadius: 5 }}
        onPress={handlePayment}
      >
        <Text
          style={{ color: "#fff", fontWeight: "bold", textAlign: "center" }}
        >
          Pay Now
        </Text>
      </TouchableOpacity>
    </View>
  );
};