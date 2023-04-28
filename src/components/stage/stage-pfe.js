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
  import "../crud_etudiant/create_etudiant/style.css";
  import * as apiPFE from "../../service/stagePfe.js";
  import * as apiEnseignant from "../../service/enseignant";

  import { useNavigate } from "react-router-dom";
  import MySideNav from "../compte_alumni/sidenav.js";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import SelectEneseignat from "./selectEnseignant.js";

  function CreateStagePfe() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const id_etudiant = user?._id;
    console.log(user);
    const [rows, setRows] = useState([]);

    const [StagePfeData, setStagePfeData] = useState({
        description: "",
        sujet: "",
        technologies: "",
        societe: "",
        duree: "",
        statutStage: "",
        dateDébutStage: "",
        dateFinStage: "",
        id_etudiant:id_etudiant,
        emailEtudiant:user.email,
        pays:"",
      
    });
    const navigate = useNavigate();
    const [statutStage, setStatutStage] = React.useState("");
    const [status, setStatus] = React.useState("");

    const handleChange = (e) => {
      setStagePfeData({ ...StagePfeData, [e.target.name]: e.target.value });
      console.log(StagePfeData);
    };
  
    const handleChangeNiveau = (e) => {
      setStatutStage(e.target.value);
      setStagePfeData({ ...StagePfeData, statutStage: e.target.value });
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        await apiPFE.createStagePfe(StagePfeData);
        toast("Stage ajouter avec succès!");

       // navigate("/espace-etudiant");
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      async function fetchData() {
        try {
          const result = await apiPFE.getStagePfeByID(id_etudiant);
          console.log(result);
          setRows(result);
        } catch (e) {
          console.log(e);
        }
      }
      fetchData();
    }, []);
  
  

    return (
      <Container>
      <MySideNav />
      {rows.length>0 ?  <Paper elevation={3}  sx={{
          height:300
            }}>
          <Box
            sx={{
              marginTop: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          > 
          </Box>
          <Typography component="h1" variant="h5"   sx={{
              margin: 10,
              textAlign:"center",
              color:"red"
         
            }}>
                Vous avez déja un sujet de pfe
                </Typography>
</Paper>          
          :  <Paper elevation={3}  sx={{
          height:600
            }}>
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
                 Insérer sujet stage de pfe{" "}
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
                      label="sujet"
                      name="sujet"
                      autoFocus
                      onChange={handleChange}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="description"
                      label="description"
                      name="description"
                      autoFocus
                      onChange={handleChange}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="societe"
                      label="societe"
                      name="societe"
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
                     type="number"
                      autoFocus
                      onChange={handleChange}
                    />
                     
                     <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="pays"
                      label="pays"
                      name="pays"
                      autoFocus
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={6}>
               
                  <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="technologies"
                      label="technologies"
                      name="technologies"
                     
                      autoFocus
                      onChange={handleChange}
                    />
  
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="dateDébutStage"
                      label="Date début stage"
                      name="dateDébutStage"
                      autoFocus
                      type="date"
                      onChange={handleChange}
                    />
                       <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="dateFinStage"
                      label="Date fin stage"
                      name="dateFinStage"
                      autoFocus
                      type="date"
                      onChange={handleChange}
                    />
                    <FormControl fullWidth sx={{mt:2}}>
                      <InputLabel id="statutStage">Statut de Stage</InputLabel>
                      <Select
                        labelId="statutStage"
                        id="statutStage"
                        value={statutStage}
                        label="statutStage"
                        name="statutStage"
                        onChange={handleChangeNiveau}
                      >
                        <MenuItem value={"pas encore commencé"}>pas encore commencé</MenuItem>
                        <MenuItem value={"en cours"}>en cours</MenuItem>
                        <MenuItem value={"validé"}> validé   </MenuItem>
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
                      Ajouter{" "}
                    </Button>
                    <ToastContainer/>

                  </Grid>
                </Grid>
              </div>
            </form>
          </Box>
        </Paper>}

       
      </Container>
    );
  }
  
  export default CreateStagePfe;