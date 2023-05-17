import {
  
    Typography,
 
    Grid,
    Paper,
    ListItem,
    List,
    ListItemText,
  } from "@mui/material";
  import { Container } from "@mui/system";
  import React, { useEffect, useState } from "react";
  import Box from "@mui/material/Box";
  import * as api from "../../service/cv";
  import { useParams } from "react-router-dom";

  import MySideNav from "./sidenavEnseignant";
 
  //import ProfilePic from "../../../../src/assets/profilepicture.PNG";
 
  import { withStyles } from "@mui/styles";
  //import { ReactComponent as Sun } from "../../update_cv/Sun.svg";
  //import { ReactComponent as Moon } from "../../update_cv/Moon.svg";
  
  function CvEtudiant() {
    const params = useParams();
    const iduser = params.id;
   // const [loading, setLoading] = useState(true);

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
      id_user:iduser,
    });
  
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => {
      setIsDarkMode((prevMode) => !prevMode);
    };
  
    const CustomSwitch = withStyles({
      root: {
        width: 64,
        height: 36,
        padding: 0,
        display: "flex",
        alignItems: "center",
      },
      switchBase: {
        padding: 1,
        "&$checked": {
          transform: "translateX(28px)",
          color: "#fff",
          "& + $track": {
            backgroundColor: "#52d869",
          },
        },
      },
      thumb: {
        width: 34,
        height: 34,
        backgroundColor: "#f5f5f5",
        borderRadius: "50%",
        transition: "transform 0.3s cubic-bezier(.78,.14,.15,.86)",
      },
      track: {
        width: 64,
        height: 36,
        borderRadius: 36 / 2,
        backgroundColor: "#bdbdbd",
        opacity: 1,
        transition: "background-color 0.3s cubic-bezier(.78,.14,.15,.86)",
      },
      checked: {},
      moonIcon: {
        marginRight: "-24px",
      },
      sunIcon: {
        marginLeft: "-24px",
      },
    })(({ classes, ...props }) => {
      return (
        <label htmlFor='darkmode-toggle' className={classes.root}>
          <input
            {...props}
            type='checkbox'
            id='darkmode-toggle'
            checked={isDarkMode}
            onChange={toggleDarkMode}
            className='dark_mode_input'
          />
          <span className={`${classes.thumb} ${isDarkMode ? classes.moonIcon : classes.sunIcon}`}>
            {/*isDarkMode ? <Moon color='#fff' /> : <Sun color='#fdd835' />*/}
          </span>
          <span className='dark_mode_label'></span>
        </label>
      );
    });
  
   /* const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const updateCv = await api.updateCv(CvData, iduser);
        console.log(updateCv, "update");
        window.location.reload(false);
      } catch (error) {
        console.log(error);
      }
    };*/
  

    
        /* 
            useEffect(() => {
      async function fetchData() {
        try {
          //console.log(iduser, "iduser");
          const result = await api.getCvbyiduser();
          setCvData(result);
        } catch (e) {
          console.log(e);
        }
      }
      fetchData();
    }, []);*/
    
  

    useEffect(() => {
        async function fetchData() {
          try {
            const result = await api.getCvbyiduser(iduser); // Use the getCvbyiduser function from cv.service.js
            setCvData(result);
          } catch (error) {
            console.log(error);
          }
        }
      
        fetchData();
      }, [iduser]);

     
    
    if (!CvData) {
        return <div>No CV found for this user.</div>;
    }
  
    return (
      <Container>
        <MySideNav />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Paper
          style={{
            width: "100%",
            padding: "20px",
            border: "1px solid black",
            backgroundColor: isDarkMode ? "black" : "white",
            color: isDarkMode ? "white" : "black",
            height: "50vh",
            overflowY: "auto",
          }}
      >
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
          
          }}
        >
            <Grid item xs={6}>
              <React.Fragment>
           
               
                <div>
                {/*  <img src={ProfilePic} alt="Mon Image" />*/} 
                </div>
                <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>

              
                <Typography variant="h5"gutterBottom> Cv : {CvData.firstname} {CvData.lastname}</Typography>

                <Typography variant="h5"gutterBottom> ..............................................</Typography>
                  
                    <Typography variant="h6" gutterBottom> Nom :  {CvData.lastname}</Typography>
                  
                  
                    <Typography variant="h6"gutterBottom> Prenom :  {CvData.firstname} </Typography>
                   
                    <Typography variant="h6"gutterBottom> Telephone : {CvData.phone} </Typography>

                   
                  
                  </Grid>

                  <Grid item container direction="column" xs={12} sm={6}>

                  
                   
    
                  </Grid>
                  </Grid>
              
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                   
                    <Typography variant="h6" gutterBottom>  Date de naissance :{CvData.Birth_date}</Typography>
                
                    <Typography  variant="h6" gutterBottom>   Adresse :{CvData.adresse}</Typography>
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
                   
                    <Typography   variant="h6" gutterBottom>   Email :{CvData.email}</Typography>
                   
                    <Typography variant="h6" gutterBottom>
                    Niveau : {CvData.classe} {CvData.niveau}
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
            <Grid item xs={6}></Grid>
        </Box>
      </Paper>
      </div>
    </Container>
  );
}
  export default CvEtudiant;
  