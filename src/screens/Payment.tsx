import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const PaymentScreen = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePayment = () => {
    // Handle payment logic
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Payment Details</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          value={cardNumber}
          onChangeText={setCardNumber}
        />
        <TextInput
          style={styles.input}
          placeholder="Expiry Date (MM/YY)"
          value={expiryDate}
          onChangeText={setExpiryDate}
        />
        <TextInput
          style={styles.input}
          placeholder="CVV"
          value={cvv}
          onChangeText={setCvv}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={handlePayment}>
          <Text style={styles.buttonText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  form: {
    width: "80%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#35C759",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default PaymentScreen;
