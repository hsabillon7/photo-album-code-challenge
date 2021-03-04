export const getAlbumMaxIndex = (albums) => {
  return albums.reduce(
    (max, p) => (p.albumId > max ? p.albumId : max),
    albums[0].albumId
  );
};

export const extractAlbum = (albums, albumId) => {
  const result = albums.filter((album) => {
    return album.albumId === albumId;
  });

  return result;
};
