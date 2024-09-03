import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar sx={{backgroundColor:'#34C94B', color:''}} position="static" className={styles.appBar}>
      <Toolbar className={styles.toolbar}>
        {isMobile && (
          <IconButton edge="start" aria-label="menu" className={styles.menuButton}>
            <MenuIcon />
          </IconButton>
        )}
        <Link to="/" className={styles.logoLink}>
          <Logo />
        </Link>
        <div className={styles.searchWrapper}>
          <Search placeholder="Search a song of your choice" searchData={searchData} />
        </div>
        {!isMobile && (
          <Button variant="contained" sx={{backgroundColor:'black', color:'#34C94B', fontFamily:'Poppins',}} className={styles.feedbackButton}>
            Give Feedback
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
