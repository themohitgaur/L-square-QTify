import React, { useState, useEffect } from 'react';
import { Container, Typography, Tabs, Tab, Grid } from '@mui/material';
import axios from 'axios';
import Carousel from '../Carousel/Carousel';
import useStyles from './SongsSectionStyles.module.css';

const SongsSection = () => {
    const [songsData, setSongsData] = useState([]);
    const [genre, setGenre] = useState('All');
    const [genres, setGenres] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        axios.get('https://qtify-backend-labs.crio.do/songs')
            .then(response => setSongsData(response.data))
            .catch(error => console.error('Error fetching songs:', error));

        axios.get('https://qtify-backend-labs.crio.do/genres')
            .then(response => setGenres(response.data))
            .catch(error => console.error('Error fetching genres:', error));
    }, []);

    const handleTabChange = (event, newValue) => {
        setGenre(newValue);
    };

    const filteredSongs = genre === 'All' ? songsData : songsData.filter(song => song.genre === genre);

    return (
        <Container>
            <Typography variant="h4">Songs</Typography>
            <Tabs value={genre} onChange={handleTabChange} className={classes.tabs}>
                {genres.map((g) => (
                    <Tab key={g} value={g} label={g} />
                ))}
                <Tab value="All" label="All" />
            </Tabs>
            <Grid container spacing={2}>
                <Carousel data={filteredSongs} />
            </Grid>
        </Container>
    );
};

export default SongsSection;
