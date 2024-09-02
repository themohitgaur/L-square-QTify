// src/components/AlbumCard/AlbumCard.js
import React from "react";
import { Card, CardMedia, CardContent, Typography, Chip } from "@mui/material";

function AlbumCard({ album }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={album.image}
        alt={album.title}
      />
      <CardContent>
        <Typography variant="h6">{album.title}</Typography>
        <Chip label={`${album.follows} Follows`} />
      </CardContent>
    </Card>
  );
}

export default AlbumCard;
