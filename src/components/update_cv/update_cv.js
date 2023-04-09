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
  ListItem,
  List,
  ListItemText,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import * as api from "../../service/cv.js";
import * as api2 from "../../service/stage.js";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import MySideNav from "../compte_alumni/sidenav.js";
import FileBase from "react-file-base64";
import PortraitIcon from "@mui/icons-material/Portrait";
import Avatar from "@mui/material/Avatar";
/*
function createStage() {
  const initialState = {
      sujet: "",
      societe: "",
      description: "",
      duree: "",
  };
  const [StageData, setStageData] = initialState();

  const handleChange = (e) => {
    setStageData({ ...StageData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newStage = await api2.createStage(StageData);
      console.log(newStage);
    } catch (error) {
      console.log(error);
    }
  };

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
                Ajouter Mes Stages{" "}
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
                      value={StageData.sujet}
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
                      value={StageData.description}
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
                      id="duree"
                      label="duree"
                      name="duree"
                      value={StageData.duree}
                      autoFocus
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      value={StageData.societe}
                      id="societe"
                      label="societe"
                      name="societe"
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
                      Valider{" "}
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
*/
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
  });

  const navigate = useNavigate();
  const [niveau, setNiveau] = React.useState("");

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
                      value={moment(CvData.Birth_date).format("DD-MM-YYYY")}
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
                  <Grid item xs={6}>
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                      <PortraitIcon />
                    </Avatar>
                    <React.Fragment>
                      <Typography variant="h4" gutterBottom>
                        Mon CV View
                      </Typography>
                      <List disablePadding>
                        <ListItem key={CvData.firstname} sx={{ py: 1, px: 0 }}>
                          <ListItemText
                            primary={CvData.firstname}
                            secondary={CvData.lastname}
                          />
                          <Typography variant="body2">
                            Telephone : {CvData.phone}
                          </Typography>
                        </ListItem>
                      </List>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <Typography variant="h6" gutterBottom>
                            Date de naissance
                          </Typography>
                          <Typography gutterBottom>
                            {CvData.Birth_date}
                          </Typography>
                          <Typography variant="h6" gutterBottom>
                            Adresse
                          </Typography>
                          <Typography gutterBottom>{CvData.adresse}</Typography>
                          <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
                            Formations
                          </Typography>
                        </Grid>
                        <Grid item container direction="column" xs={12} sm={6}>
                          <Typography variant="h6" gutterBottom>
                            Email
                          </Typography>
                          <Typography gutterBottom>{CvData.email}</Typography>
                          <Typography variant="h6" gutterBottom>
                            Niveau
                          </Typography>
                          <Typography gutterBottom>
                            {CvData.classe} {CvData.niveau}
                          </Typography>
                          <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
                            Stages
                          </Typography>
                        </Grid>
                      </Grid>
                    </React.Fragment>
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
