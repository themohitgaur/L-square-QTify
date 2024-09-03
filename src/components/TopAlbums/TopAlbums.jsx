// src/components/Section/Section.js
import React, { useEffect, useState, useRef } from "react";
import { Grid, Typography, Button, Box, IconButton } from "@mui/material";
import AlbumCard from "../Card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Section({ title, apiUrl, initialItemCount = 4 }) {
  const [items, setItems] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isCarouselView, setIsCarouselView] = useState(true);

  const swiperRef = useRef(null);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [apiUrl]);

  // Determine displayed items based on the view type
  const displayedItems = isCarouselView || !isCollapsed ? items : items.slice(0, initialItemCount);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    // Switch to grid view if collapsing
    if (isCollapsed) {
      setIsCarouselView(false);
    }
  };

  const toggleView = () => {
    setIsCarouselView(!isCarouselView);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6">{title}</Typography>
        <Box>
          {items.length > initialItemCount && (
            <Button sx={{ color:'#34C94B', fontFamily:'Poppins',}} onClick={toggleCollapse} variant="text">
              {isCollapsed ? "Show All" : "Collapse"}
            </Button>
          )}
        </Box>
      </Box>

      {isCarouselView ? (
        <Box position="relative">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {displayedItems.map((item) => (
              <SwiperSlide key={item.id}>
                <AlbumCard album={item} />
              </SwiperSlide>
            ))}
          </Swiper>
          <IconButton
            onClick={() => swiperRef.current?.slidePrev()}
            style={{
              backgroundColor:'#34C94B',
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <IconButton
            onClick={() => swiperRef.current?.slideNext()}
            style={{
              position: "absolute",
              backgroundColor:'#34C94B',
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {displayedItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <AlbumCard album={item} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}

export default Section;
