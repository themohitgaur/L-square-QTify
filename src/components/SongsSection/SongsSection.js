import React, { useState, useEffect } from 'react';
import { Container, Typography, Tabs, Tab, Grid } from '@mui/material';
import axios from 'axios';
import Carousel from '../Carousel/Carousel';
import useStyles from './SongsSectionStyles.module.css';

const SongsSection = () => {
    const [songsData, setSongsData] = useState([]);
    const [genre, setGenre] = useState('All');
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        axios.get('https://qtify-backend-labs.crio.do/songs')
            .then(response => setSongsData(response.data))
            .catch(error => console.error('Error fetching songs:', error));

        axios.get('https://qtify-backend-labs.crio.do/genres')
            .then(response => setGenres(response.data.data)) // Extracting data property
            .catch(error => console.error('Error fetching genres:', error));
    }, []);

    const handleTabChange = (event, newValue) => {
        setGenre(newValue);
    };

    const filteredSongs = genre === 'All' ? songsData : songsData.filter(song => song.genre === genre);

    return (
        <Container>
            <Typography variant="h6" gutterBottom>
                Songs
            </Typography>
            <Tabs 
                value={genre} 
                onChange={handleTabChange} 
                sx={{ marginBottom: 2 }}
                variant="scrollable"
                scrollButtons="auto"
            >
                <Tab sx={{ color: 'white' }} value="All" label="All" />
                {genres.map((genreObj) => (
                    <Tab 
                        sx={{ color: 'white' }} 
                        key={genreObj.key} 
                        value={genreObj.key} 
                        label={genreObj.label} 
                    />
                ))}
            </Tabs>
            <Grid container spacing={2}>
                <Carousel data={filteredSongs} />
            </Grid>
        </Container>
    );
};

export default SongsSection;
