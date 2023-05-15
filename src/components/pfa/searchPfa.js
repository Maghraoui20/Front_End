import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function SearchPfa(props) {
  const { onFilterChange } = props;
  const [filter, setFilter] = useState({
    technology: "",
    teacherLastName: "",
    teacherFirstName: "",
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  const handleFilterSubmit = (event) => {
    event.preventDefault();
    onFilterChange(filter);
  };

  return (
    <Box component="form" onSubmit={handleFilterSubmit}>
      <TextField
        id="outlined-basic"
        label="Technologie"
        variant="outlined"
        name="technology"
        value={filter.technology}
        onChange={handleFilterChange}
      />
      <TextField
        id="outlined-basic"
        label="Nom d'enseignant"
        variant="outlined"
        name="teacherLastName"
        value={filter.teacherLastName}
        onChange={handleFilterChange}
      />
      <TextField
        id="outlined-basic"
        label="Prénom d'enseignant"
        variant="outlined"
        name="teacherFirstName"
        value={filter.teacherFirstName}
        onChange={handleFilterChange}
      />
      <Button variant="contained" type="submit">
        Rechercher
      </Button>
    </Box>
  );
}

export default SearchPfa;
