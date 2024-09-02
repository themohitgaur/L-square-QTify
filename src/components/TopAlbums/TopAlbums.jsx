// src/components/TopAlbums/TopAlbums.js
import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import AlbumCard from "../Card/Card";

function TopAlbums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("https://qtify-backend-labs.crio.do/albums/top")
      .then((response) => response.json())
      .then((data) => setAlbums(data));
  }, []);

  return (
    <Grid container spacing={3}>
      {albums.map((album) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={album.id}>
          <AlbumCard album={album} />
        </Grid>
      ))}
    </Grid>
  );
}

export default TopAlbums;
