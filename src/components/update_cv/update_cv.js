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
import * as api from "../../service/cv.js";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import MySideNav from "../compte_alumni/sidenav.js";
import FileBase from "react-file-base64";

function UpdateCv() {
  const params = useParams();
  const [CvData, setCvData] = useState({
    firstname: "",
    lastname: "",
    niveau: "",
    classe: "",
    Birth_date: "",
    adresse: "",
    email: "",
    phone: "",
    bio: "",
    experience: "",
    stage: "",
  });

  const navigate = useNavigate();
  const [niveau, setNiveau] = React.useState("");
  const [stage, setStage] = React.useState("");

  //const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  //const idu = user?._id;
  //const iduser = idu;

  const handleChange = (e) => {
    setCvData({ ...CvData, [e.target.name]: e.target.value });
  };

  const handleChangeNiveau = (e) => {
    setNiveau(e.target.value);
    setCvData({ ...CvData, niveau: e.target.value });
  };

  const handleChangeStage = (e) => {
    setStage(e.target.value);
    setCvData({ ...CvData, stage: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const updateCv = await api.updateCv(CvData, params.id);
      console.log(updateCv, "update");
      window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        //console.log(iduser, "iduser");
        const result = await api.getCvbyid(params.id);
        setCvData(result);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

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
            marginTop: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div className="grid">
              <Typography component="h1" variant="h5">
                Modifier Mon CV{" "}
              </Typography>
              <Box
                sx={{
                  marginTop: 5,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 12 }}
                >
                  <Grid item xs={6}>
                    <TextField
                      margin="normal"
                      required
                      value={CvData.firstname}
                      fullWidth
                      id="firstname"
                      label="nom"
                      name="firstname"
                      autoFocus
                      onChange={handleChange}
                    />
                    <TextField
                      margin="normal"
                      required
                      value={CvData.lastname}
                      fullWidth
                      id="lastname"
                      label="prénom"
                      name="lastname"
                      autoFocus
                      onChange={handleChange}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="bio"
                      label="bio"
                      name="bio"
                      value={CvData.bio}
                      autoFocus
                      onChange={handleChange}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="adresse"
                      label="adresse"
                      name="adresse"
                      value={CvData.adresse}
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
                      value={CvData.email}
                      autoFocus
                      onChange={handleChange}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="phone"
                      label="phone"
                      name="phone"
                      value={CvData.phone}
                      autoFocus
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      value={CvData.classe}
                      id="classe"
                      label="classe"
                      name="classe"
                      autoFocus
                      onChange={handleChange}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      value={CvData.experience}
                      id="experience"
                      label="experience"
                      name="experience"
                      autoFocus
                      onChange={handleChange}
                    />

                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      value={moment(CvData.Birth_date).format("YYYY-MM-DD")}
                      id="Birth_date"
                      label="date"
                      name="Birth_date"
                      autoFocus
                      type="date"
                      onChange={handleChange}
                    />

                    <FormControl fullWidth sx={{ mt: 3 }}>
                      <InputLabel id="Niveau">Niveau</InputLabel>
                      <Select
                        labelId="Niveau"
                        id="Niveau"
                        value={CvData.niveau}
                        label="Niveau"
                        name="niveau"
                        onChange={handleChangeNiveau}
                      >
                        <MenuItem value={"licence"}>Licence</MenuItem>
                        <MenuItem value={"master"}>Master</MenuItem>
                        <MenuItem value={"cycle ingénieur"}>
                          Cycle ingénieur
                        </MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl fullWidth sx={{ mt: 3 }}>
                      <InputLabel id="staus">Stage</InputLabel>
                      <Select
                        labelId="stage"
                        id="stage"
                        value={CvData.Stage}
                        label="stage"
                        onChange={handleChangeStage}
                      >
                        <MenuItem value={"stage été"}>Stage d'été</MenuItem>
                        <MenuItem value={"stage pfe"}>Stage PFE</MenuItem>
                      </Select>
                    </FormControl>
                    <Typography> Importer votre photo de profil </Typography>
                    <FileBase
                      type="file"
                      name="choisir une photo"
                      multiple={false}
                      onDone={({ base64 }) =>
                        setCvData({ ...CvData, photo: base64 })
                      }
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
                      Modifier{" "}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </div>
          </form>
        </Box>
      </Paper>
    </Container>
  );
}

export default UpdateCv;
