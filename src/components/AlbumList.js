import React from "react";
import { StyleSheet, View } from "react-native";
import Album from "./Album";

const AlbumList = ({ albums, color }) => {
  return (
    <View>
      {albums.map((album) => (
        <Album
          key={album.id}
          title={album.title}
          thumbnail={album.thumbnailUrl}
          color={color}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});

export default AlbumList;
