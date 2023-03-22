import {
    TextField,
    Typography,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Grid,
    Paper
  } from "@mui/material";
  import { Container } from "@mui/system";
  import React, { useEffect, useState } from "react";
  import Box from "@mui/material/Box";
  import "../create_etudiant/style.css"
  import * as api from "../../../service/etudiant.js";
  import { useNavigate , useParams} from "react-router-dom";
  import moment from "moment";

function UpdateEtudiant() {
    
    const params = useParams();
    const [EtudiantData, setEtudiantData] = useState({
        firstname: "",
        lastname: "",
        niveau: "",
        classe: "",
        Birth_date: "",
        status: "",
    });
      const navigate = useNavigate();
      const [niveau, setNiveau] = React.useState("");
      const [status, setStatus] = React.useState("");
    
      const handleChange = (e) => {
          setEtudiantData({ ...EtudiantData, [e.target.name]: e.target.value });
          console.log(EtudiantData);
        };
        
        const handleChangeNiveau = (e) => {
            setNiveau(e.target.value);
            setEtudiantData({ ...EtudiantData, niveau: e.target.value });
        };
        const handleChangeStatus = (e) => {
            setStatus(e.target.value);
            setEtudiantData({ ...EtudiantData, status: e.target.value });
        };
        const handleSubmit = async (event) => {
            event.preventDefault();
            
            try {
                const updateEtudiant = await api.updateEtudiant(EtudiantData, params.id);
                console.log(updateEtudiant);
                navigate("/");
            } catch (error) {
                console.log(error);
            }
        };
        
        
        useEffect(() => {
            async function fetchData() {
              try{
              const result = await api.getEtudiantbyid(params.id)
              setEtudiantData(result)
            } catch (e) {
              console.log(e)
            }}
            fetchData()}, []) 
        return (  <Container>
    
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
  <div       className="grid">
<Typography component="h1" variant="h5">
  Créer un étudiant{" "}
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
        value={EtudiantData.firstname}
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
        value={EtudiantData.lastname}
        fullWidth
        id="lastname"
        label="prénom"
        name="lastname"
        autoFocus
        onChange={handleChange}
      />

      <FormControl fullWidth>
        <InputLabel id="Niveau">Niveau</InputLabel>
        <Select
          labelId="Niveau"
          id="Niveau"
          value={EtudiantData.niveau}
          label="Niveau"
          name="niveau"
          onChange={handleChangeNiveau}
        >
          <MenuItem value={"licence"}>Licence</MenuItem>
          <MenuItem value={"master"}>Master</MenuItem>
          <MenuItem value={"cycle ingénieur"}>Cycle ingénieur</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={6}>
      <TextField
        margin="normal"
        required
        fullWidth
        value={EtudiantData.classe}
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
        value={moment(EtudiantData.Birth_date).format('YYYY-MM-DD')}

        id="Birth_date"
        label="date"
        name="Birth_date"
        autoFocus
        type="date"
        onChange={handleChange}
      />

      <FormControl fullWidth>
        <InputLabel id="staus">Status</InputLabel>
        <Select
          labelId="status"
          id="status"
          value={EtudiantData.status}
          label="status"
          onChange={handleChangeStatus}
        >
          <MenuItem value={"alumni"}>Alumni</MenuItem>
          <MenuItem value={"actuel"}>Actuel</MenuItem>
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
          mt: 3, mb: 2 ,
          m: 4,
          backgroundColor: "#00A36C",
          ":hover": { backgroundColor: "#00A36C" },
        }}      >
        Modifier{" "}
      </Button>
    </Grid>
  </Grid>
</div>
</form>
</Box>
</Paper>
</Container> );
}

export default UpdateEtudiant;