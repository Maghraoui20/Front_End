import {
    TextField,
    Typography,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Grid,
    Paper,
  } from "@mui/material";
  import { Container } from "@mui/system";
  import React, { useState } from "react";
  import Box from "@mui/material/Box";
  import * as api from "../../service/administratif";
  import { useNavigate } from "react-router-dom";
  import MySideNav from "../../components/sidenavs/sidenavAdmin";
  
  function CreateAdministratif() {
    const [AdministratifData, setAdministratifData] = useState({
      lastname: "",
      firstname: "",
      email: "",
      login: "",
      password: "",
      phone: "",

      role: "directeur",
      accessRights: []
    });
    const navigate = useNavigate();
    const [accessRights, setAccesRights] = React.useState("");
  
  
    const handleChange = (e) => {
      setAdministratifData({ ...AdministratifData, [e.target.name]: e.target.value });
      console.log(AdministratifData);
    };
    const handleAccesChange = (e) => {
        if (e.target.name === "accessRights") {
          const selectedOptions = Array.from(e.target.value)
            .filter((option) => option.selected)
            .map((option) => option.value);
          setAccesRights(selectedOptions); // Update the accessRights state
          setAdministratifData({ ...AdministratifData, [e.target.name]: selectedOptions });
        } else {
          setAdministratifData({ ...AdministratifData, [e.target.name]: e.target.value });
        }
      };
      
      const handleAccsChange = (e) => {
        if (e.target.name === "accessRights") {
          const selectedOptions = Array.from(e.target.selectedOptions)
            .map((option) => option.value);
          setAccesRights(selectedOptions); // Update the accessRights state
          setAdministratifData({ ...AdministratifData, [e.target.name]: selectedOptions });
        } else {
          setAdministratifData({ ...AdministratifData, [e.target.name]: e.target.value });
        }
      };
      
 
  
    const handleSubmit = async (administratif) => {
      administratif.preventDefault();
  
      try {
        const newAdministratif = await api.createAdministratif(AdministratifData);
        console.log(newAdministratif);
        navigate("/gerer_droit_acces");
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <Container>
        <MySideNav />
  
        <Paper elevation={3} className="paper">
          <Box
            sx={{
              marginTop: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <form onSubmit={handleSubmit}>
              <div className="grid">
                <Typography component="h1" variant="h5">
                  Ajouter un administratif{" "}
                </Typography>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 12 }}
                >
                  <Grid item xs={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="firstname"
                      label="prenom "
                      name="firstname"
                      autoFocus
                      onChange={handleChange}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="lastname"
                      label="nom"
                      name="lastname"
                      autoFocus
                      onChange={handleChange}
                    />
  
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="email"
                      name="email"
                      autoFocus
                      onChange={handleChange}
                    />
                      <FormControl fullWidth>
    <InputLabel id="accessRights-label">Droits d'accès</InputLabel>
    <Select
      labelId="accessRights-label"
      id="accessRights"
      name="accessRights"
      multiple
      value={AdministratifData.accessRights}
      onChange={handleAccsChange}
      renderValue={(selected) => selected.join(", ")}
    >
      <MenuItem value="gestion-etudiant">Gestion étudiant</MenuItem>
      <MenuItem value="gestion-enseignant">Gestion enseignant</MenuItem>
      <MenuItem value="gestion-evenement">Gestion événement</MenuItem>
    </Select>
  </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="phone"
                      label="numero de telephone"
                      name="phone"
                      autoFocus
                      onChange={handleChange}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="login"
                      label="login"
                      name="login"
                      autoFocus
                      onChange={handleChange}
                    />
  
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="password"
                      label="password"
                      name="password"
                      autoFocus
                      onChange={handleChange}
                    />
            



                  </Grid>
                  <Grid item xs={3}></Grid>
                  <Grid item xs={6}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{
                        mt: 3,
                        mb: 2,
                        m: 4,
                        backgroundColor: "#00A36C",
                        ":hover": { backgroundColor: "#00A36C" },
                      }}
                    >
                      Ajouter{" "}
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </form>
          </Box>
        </Paper>
      </Container>
    );
  }
  
  export default CreateAdministratif;
  