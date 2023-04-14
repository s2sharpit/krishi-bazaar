import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import farmer from "../data/farmerData";

export default function FarmerProfile () {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <View style={styles.container}>
      {/* <Image source={{ uri: farmer.photo }} style={styles.photo} /> */}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{farmer.name}</Text>
        <Text style={styles.location}>{farmer.location}</Text>
        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={[
              styles.favoriteButton,
              isFavorite && styles.favoriteButtonActive,
            ]}
            onPress={handleFavorite}
          >
            <Text style={styles.favoriteText}>
              {isFavorite ? "Remove Favorite" : "Add to Favorites"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 16,
    backgroundColor: "#fff",
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 16,
    justifyContent: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  location: {
    fontSize: 16,
    color: "#777",
    marginBottom: 8,
  },
  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  favoriteButton: {
    backgroundColor: "#ddd",
    padding: 8,
    borderRadius: 8,
    marginRight: 8,
  },
  favoriteButtonActive: {
    backgroundColor: "#ff8c00",
  },
  favoriteText: {
    color: "#fff",
    fontWeight: "bold",
  },
});