import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/Search icon.svg";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { styled } from "@mui/system";
import { truncate } from "../../helpers/helpers";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const Listbox = styled("ul")(({ theme }) => ({
  width: "100%",
  margin: 0,
  padding: 0,
  position: "absolute",
  borderRadius: "0px 0px 10px 10px",
  border: "1px solid var(--color-primary)",
  top: 60,
  height: "max-content",
  maxHeight: "500px",
  zIndex: 10,
  overflowY: "scroll",
  listStyle: "none",
  backgroundColor: "var(--color-black)",
  overflow: "auto",
  "& li.Mui-focused": {
    backgroundColor: "#4a8df6",
    color: "white",
    cursor: "pointer",
  },
  "& li:active": {
    backgroundColor: "#2977f5",
    color: "white",
  },
}));

function Search({ searchData, placeholder }) {
  const navigate = useNavigate();

  const onSubmit = (e, value) => {
    e.preventDefault();
    if (value) {
      navigate(`/album/${value.slug}`);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <Autocomplete
        freeSolo
        options={searchData || []}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <form
            className={styles.wrapper}
            onSubmit={(e) => onSubmit(e, params.inputProps.value)}
          >
            <TextField
              {...params}
              placeholder={placeholder}
              InputProps={{
                ...params.InputProps,
                className: styles.search,
                endAdornment: (
                  <button className={styles.searchButton} type="submit">
                    <SearchIcon />
                  </button>
                ),
              }}
            />
          </form>
        )}
        renderOption={(props, option) => {
          const artists = option.songs.reduce((accumulator, currentValue) => {
            accumulator.push(...currentValue.artists);
            return accumulator;
          }, []);

          return (
            <li {...props} className={styles.listElement}>
              <div>
                <p className={styles.albumTitle}>{option.title}</p>
                <p className={styles.albumArtists}>
                  {truncate(artists.join(", "), 40)}
                </p>
              </div>
            </li>
          );
        }}
        ListboxComponent={Listbox}
      />
    </div>
  );
}

export default Search;
