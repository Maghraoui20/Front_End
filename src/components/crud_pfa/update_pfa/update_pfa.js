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
  import React, { useEffect, useState } from "react";
  import Box from "@mui/material/Box";
  import { Chip } from "@material-ui/core";
  //import "../create_enseignant/style.css";
  import * as api from "../../../service/pfa.js";
  import { useNavigate, useParams } from "react-router-dom";
  
  import MySideNav from "../../enseignant/sidenavEnseignant";
  
  function UpdatePfa() {
    const params = useParams();
    const [PfaData, setPfaData] = useState({
      Description: "",
      titre: "",
      sujet: "",
      technologies: [],
      nbre_etudiant: "",
      id_etudiant: "",
    });
    const navigate = useNavigate();
  
    const [technologies, setTechnologies] = React.useState([]);
    const [newTechnology, setNewTechnology] = React.useState("");
  
    const handleChange = (e) => {
      setPfaData({ ...PfaData, [e.target.name]: e.target.value });
      console.log(PfaData);
    };
  
    const handleChangeTechnologie = (event) => {
      const selected = event.target.value;
      const index = selected.indexOf("Add new technology");
      if (index !== -1) {
        const newTechnology = prompt("Enter the name of the new technology");
        if (newTechnology) {
          setTechnologies([...technologies, { _id: "", name: newTechnology }]);
          setNewTechnology(newTechnology);
          setPfaData({ ...PfaData, technologies: [...selected, newTechnology] });
        } else {
          setPfaData({ ...PfaData, technologies: selected.filter((value) => value !== "Add new technology") });
        }
      } else {
        setPfaData({ ...PfaData, technologies: selected });
      }
    };
    
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const updatePfa = await api.updatePfa(
          PfaData,
          params.id
        );
        console.log(updatePfa);
        navigate("/readall-pfa");
      } catch (error) {
        console.log(error);
      }
    };
  
   useEffect(() => {
      const fetchTechnologies = async () => {
        try {
          const response = await api.getAllTechnologies();
          setTechnologies(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchTechnologies();
    }, []); 

    useEffect(() => {
        async function fetchData() {
          try {
            const result = await api.getPfabyid(params.id);
            setPfaData(result);
          } catch (e) {
            console.log(e);
          }
        }
        fetchData();
      }, [params.id]);
  
    return (
      <Container>
        <MySideNav />
        <Paper
          elevation={3}
          sx={{
            height: 600,
          }}
        >
          <Box
            sx={{
              marginTop: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <form onSubmit={handleSubmit}>
              <div className="grid">
                <Typography component="h1" variant="h5">
                  Modifier un sujet PFA{" "}
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
                      id="sujet"
                      label="Sujet"
                      name="sujet"
                      autoFocus
                      onChange={handleChange}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="titre"
                      label="titre"
                      name="titre"
                      autoFocus
                      onChange={handleChange}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="description"
                      label="Description"
                      name="description"
                      autoFocus
                      onChange={handleChange}
                    />
  
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="nbre_etudiant"
                      label="Nombre d'étudiants"
                      name="nbre_etudiant"
                      type={"number"}
                      autoFocus
                      onChange={handleChange}
                    />
  
                    <FormControl fullWidth sx={{ mt: 2 }}>
                      <InputLabel id="Technologie">Technologie</InputLabel>
                      <Select
                        labelId="Technologie"
                        id="Technologie"
                        value={PfaData.technologies}
                        label="Technologie"
                        name="technologie"
                        multiple
                        onChange={handleChangeTechnologie}
                        renderValue={(selected) => (
                          <div style={{ display: "flex", flexWrap: "wrap" }}>
                            {selected.map((value) => (
                              <Chip
                                key={value}
                                label={value}
                                style={{ margin: 2 }}
                              />
                            ))}
                          </div>
                        )}
                      >
                        {technologies.map((technology) => (
                          <MenuItem key={technology._id} value={technology.name}>
                            {technology.name}
                          </MenuItem>
                        ))}
                        <MenuItem value={newTechnology}>
                          <em>Add new technology</em>
                        </MenuItem>
                      </Select>
                    </FormControl>
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
                      Modifier{" "}
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
  
  export default UpdatePfa;