import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { fetchPhotoAlbums } from "./src/api";
import { getAlbumMaxIndex, extractAlbum } from "./src/utils";
import AlbumList from "./src/components/AlbumList";

export default function App() {
  const [albums, getAlbums] = useState([]);
  const [maxValue, setMaxValue] = useState(0);
  const [albumOne, setAlbumOne] = useState([]);
  const [albumTwo, setAlbumTwo] = useState([]);
  const [albumThree, setAlbumThree] = useState([]);

  // Obtienen los albumes disponibles desde la API
  const getPhotoAlbums = async () => {
    const data = await fetchPhotoAlbums();
    getAlbums(data);
  };

  useEffect(() => {
    getPhotoAlbums();
  }, []);

  useEffect(() => {
    if (albums.length) setMaxValue(getAlbumMaxIndex(albums));
  }, [albums]);

  useEffect(() => {
    if (maxValue) {
      // Teniendo el valor máximo, filtrar los valores
      setAlbumOne(extractAlbum(albums, maxValue));
      setAlbumTwo(extractAlbum(albums, maxValue - 1));
      setAlbumThree(extractAlbum(albums, maxValue - 2));
    }
  }, [maxValue]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <AlbumList albums={albumOne.slice(-2)} color="#ff0000" />
        <AlbumList albums={albumTwo.slice(-2)} color="#00ff00" />
        <AlbumList albums={albumThree.slice(-2)} color="#0000ff" />
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
