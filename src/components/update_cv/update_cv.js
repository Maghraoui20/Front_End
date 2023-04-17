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
import { useParams } from "react-router-dom";
import moment from "moment";
import MySideNav from "../compte_alumni/sidenav.js";
import FileBase from "react-file-base64";
import ProfilePic from "../../../src/assets/profilepicture.PNG";


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
    experiences: [
      {
        title: "",
        description: "",
        date_debut: "",
        date_fin: "",
      },
    ],
    stages: [
      {
        sujet: "",
        societe: "",
        duree: "",
        type: "",
      },
    ],
  });

  //const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  //const idu = user?._id;
  //const iduser = idu;

  const [niveau, setNiveau] = React.useState("");

  const handleChange = (e) => {
    setCvData({ ...CvData, [e.target.name]: e.target.value });
  };

  const handleChangeNiveau = (e) => {
    setNiveau(e.target.value);
    setCvData({ ...CvData, niveau: e.target.value });
  };

  // Update the experiences array in CvData
  const updateExperiences = (index, field, value) => {
    const updatedExperiences = [...CvData.experiences];
    updatedExperiences[index][field] = value; // Update the specific field with the new value
    setCvData({ ...CvData, experiences: updatedExperiences }); // Update the CvData state with the updated experiences array
  };

  // Add a new experience object to the experiences array
  const addExperience = () => {
    setCvData({
      ...CvData,
      experiences: [
        ...CvData.experiences,
        {
          title: "",
          description: "",
          date_debut: "",
          date_fin: "",
        },
      ],
    });
  };

  // Remove an experience object from the experiences array
  const removeExperience = (index) => {
    const updatedExperiences = [...CvData.experiences];
    updatedExperiences.splice(index, 1); // Remove the experience object at the specified index
    setCvData({ ...CvData, experiences: updatedExperiences }); // Update the CvData state with the updated experiences array
  };

  // Usage of the updateExperiences function
  const handleInputChange = (index, field, event) => {
    const { value } = event.target;
    updateExperiences(index, field, value);
  };

  // Update the stages array in CvData
  const updateStages = (index, field, value) => {
    const updatedStages = [...CvData.stages];
    updatedStages[index][field] = value; // Update the specific field with the new value
    setCvData({ ...CvData, stages: updatedStages }); // Update the CvData state with the updated stages array
  };

  // Add a new stage object to the stages array
  const addStage = () => {
    setCvData({
      ...CvData,
      stages: [
        ...CvData.stages,
        {
          sujet: "",
          societe: "",
          duree: "",
          type: "",
        },
      ],
    });
  };

  // Remove a stage object from the stages array
  const removeStage = (index) => {
    const updatedStages = [...CvData.stages];
    updatedStages.splice(index, 1); // Remove the stage object at the specified index
    setCvData({ ...CvData, stages: updatedStages }); // Update the CvData state with the updated stages array
  };

  const handleInputChange2 = (index, field, event) => {
    const { value } = event.target;
    updateStages(index, field, value);
  };

  const handleInputChangeType = (index, field, event) => {
    const { value } = event.target;

    const updatedStages = [...CvData.stages];
    updatedStages[index][field] = value;
    setCvData({ ...CvData, stages: updatedStages });
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
          height: "100vh",
          overflowY: "auto",
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
                    <Typography> Importer votre photo de profil </Typography>
                    <FileBase
                      type="file"
                      name="choisir une photo"
                      multiple={false}
                      onDone={({ base64 }) =>
                        setCvData({ ...CvData, photo: base64 })
                      }
                    />
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
                    <div>
                      <h3>Experiences</h3>
                      {/* Render input fields for each experience */}
                      {CvData.experiences.map((experience, index) => (
                        <div key={index}>
                          <TextField
                            margin="normal"
                            required
                            fullWidth
                            value={experience.title}
                            id="title"
                            label="Title Formation"
                            name="title"
                            autoFocus
                            onChange={(event) =>
                              handleInputChange(index, "title", event)
                            }
                          />
                          <TextField
                            margin="normal"
                            required
                            fullWidth
                            value={experience.description}
                            id="description"
                            label="Description Formation"
                            name="description"
                            autoFocus
                            onChange={(event) =>
                              handleInputChange(index, "description", event)
                            }
                          />
                          <TextField
                            margin="normal"
                            required
                            fullWidth
                            value={moment(experience.date_debut).format(
                              "YYYY-MM-DD"
                            )}
                            id="date_debut"
                            label="Date début de la formation"
                            name="date_debut"
                            autoFocus
                            type="date"
                            onChange={(event) =>
                              handleInputChange(index, "date_debut", event)
                            }
                          />

                          <TextField
                            margin="normal"
                            required
                            fullWidth
                            value={moment(experience.date_fin).format(
                              "YYYY-MM-DD"
                            )}
                            id="date_fin"
                            label="Date fin de la formation"
                            name="date_fin"
                            autoFocus
                            type="date"
                            onChange={(event) =>
                              handleInputChange(index, "date_fin", event)
                            }
                          />
                          {/* Add more input fields for other properties of experience object */}
                          {/* Add a button to remove the experience object */}
                          <button onClick={() => removeExperience(index)}>
                            Remove
                          </button>
                        </div>
                      ))}
                      {/* Add a button to add a new experience object */}
                      <button onClick={addExperience}>Add Experience</button>
                      {/* JSX code for other fields in your component */}
                    </div>
                    <div>
                    <h3>Stages</h3>
                      {/* Render input fields for each stage */}
                      {CvData.stages.map((stage, index) => (
                        <div key={index}>
                          <TextField
                            margin="normal"
                            required
                            fullWidth
                            value={stage.sujet}
                            id="sujet"
                            label="Sujet stage"
                            name="sujet"
                            autoFocus
                            onChange={(event) =>
                              handleInputChange2(index, "sujet", event)
                            }
                          />
                          <TextField
                            margin="normal"
                            required
                            fullWidth
                            value={stage.societe}
                            id="societe"
                            label="Societe stage"
                            name="societe"
                            autoFocus
                            onChange={(event) =>
                              handleInputChange2(index, "societe", event)
                            }
                          />
                          <TextField
                            margin="normal"
                            required
                            fullWidth
                            value={stage.duree}
                            id="duree"
                            label="Duree stage"
                            name="duree"
                            autoFocus
                            onChange={(event) =>
                              handleInputChange2(index, "duree", event)
                            }
                          />
                          <FormControl fullWidth sx={{ mt: 3 }}>
                            <InputLabel id="Type">Type stage</InputLabel>
                            <Select
                              labelId="Type"
                              id="Type"
                              value={stage.type}
                              label="Type stage"
                              name="type"
                              onChange={(event) =>
                                handleInputChangeType(index, "type", event)
                              }
                            >
                              <MenuItem value={"Stage d'été"}>
                                Stage d'été
                              </MenuItem>
                              <MenuItem value={"PFA"}>PFA</MenuItem>
                              <MenuItem value={"PFE"}>PFE</MenuItem>
                            </Select>
                          </FormControl>
                          {/* Add more input fields for other properties of stage object */}
                          {/* Add a button to remove the stage object */}
                          <button onClick={() => removeStage(index)}>
                            Remove
                          </button>
                        </div>
                      ))}
                      {/* Add a button to add a new stage object */}
                      <button onClick={addStage}>Add Stage</button>
                      {/* JSX code for other fields in your component */}
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    
                    <React.Fragment>
                   
                      <Typography variant="h4" gutterBottom>
                        Mon CV View
                      
                      </Typography>
                      <div>
                        <img src={ProfilePic} alt="Mon Image" />
                      </div>
                     
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
                            Experiences
                          </Typography>

                          <div>
                            {/* JSX code for rendering experience data */}

                            <ul>
                              {CvData.experiences.map((experience, index) => (
                                <li key={index}>
                                  <strong>Title: </strong>
                                  {experience.title}
                                  <br />
                                  <strong>Description: </strong>
                                  {experience.description}
                                  <br />
                                  <strong>Date Debut: </strong>
                                  {experience.date_debut}
                                  <br />
                                  <strong>Date Fin: </strong>
                                  {experience.date_fin}
                                  <br />
                                </li>
                              ))}
                            </ul>
                          </div>
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
                          {/* JSX code for rendering stage data */}

                          <ul>
                            {CvData.stages.map((stage, index) => (
                              <li key={index}>
                                <strong>Sujet: </strong>
                                {stage.sujet}
                                <br />
                                <strong>Societe: </strong>
                                {stage.societe}
                                <br />
                                <strong>Duree: </strong>
                                {stage.duree}
                                <br />
                                <strong>Type: </strong>
                                {stage.type}
                                <br />
                              </li>
                            ))}
                          </ul>
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
