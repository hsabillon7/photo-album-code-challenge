import React from "react";
import { StyleSheet, Dimensions, View, Text, Image } from "react-native";

const { width, height } = Dimensions.get("screen");

const Album = ({ title, thumbnail, color }) => {
  return (
    <View style={[styles.card, { borderColor: color }]}>
      <Text style={styles.title}>{title}</Text>
      <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width * 0.8,
    height: height * 0.4,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  thumbnail: {
    width: width * 0.6,
    height: height * 0.3,
    alignSelf: "center",
  },
});

export default Album;
