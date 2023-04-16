import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function Contact () {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (name && email && message) {
      // send contact form data to backend
      Alert.alert("Success", "Your message has been sent.");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      Alert.alert("Error", "Please fill out all fields.");
    }
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.title}>Contact Us</Text>
      </View> */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={[styles.input, styles.messageInput]}
          placeholder="Message"
          value={message}
          onChangeText={setMessage}
          multiline
          numberOfLines={4}
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.contactInfoContainer}>
          <Text style={styles.contactTitle}>Seller Information:</Text>
          <Text style={styles.contactText}>Name: Tushar Saini</Text>
          <Text style={styles.contactText}>Email: 123@example.com</Text>
          <Text style={styles.contactText}>Phone: (+91) 98765-43210</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
  },
  form: {
    padding: 20,
    width: '90%',
  },
  input: {
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  messageInput: {
    height: 100,
    textAlignVertical: "top",
  },
  submitButton: {
    backgroundColor: "#35C759",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  // subtitle: {
  //   fontSize: 24,
  //   fontWeight: "bold",
  //   marginBottom: 20,
  // },
  contactInfoContainer: {
    width: "80%",
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 10,
    backgroundColor: "#F8F8F8",
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  contactText: {
    fontSize: 16,
    marginBottom: 5,
  },
});
