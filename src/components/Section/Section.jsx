import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import CardComponent from '../Card/CardComponent';
import axios from 'axios';
import useStyles from './Section.module.css';

const Section = ({ title, endpoint }) => {
    const [data, setData] = useState();
    const [showAll, setShowAll] = useState(false);
    const classes = useStyles();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(endpoint);
                setData(response?.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [endpoint]);
    
console.log(data)
    return (
        <Container>
            <div className={classes.sectionHeader}>
                <Typography variant="h4">{title}</Typography>
                <Button onClick={() => setShowAll(!showAll)}>
                    {showAll ? 'Show All' : 'Collapse'}
                </Button>
            </div>
            <Grid container spacing={2}>
                {data?.map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item.id}>
                        <CardComponent album={item} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Section;
