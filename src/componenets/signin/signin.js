import {
  TextField,
  Typography,
  Button,
  OutlinedInput,
  InputLabel,
  FormControl,
  Grid,
  Link, Avatar
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import * as api from '../../service/authentification.js'
import { NavLink, useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function Signin() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [signinData, setSigninData] = useState({ phone: "", password: "" });
  const navigate = useNavigate();

  const handleChangePhone = (e) => {
    setSigninData({ ...signinData, phone : e.target.value });
    console.log(signinData,"signinData");
  };
  const handleChangePassword = (e) => {
    setSigninData({ ...signinData, password : e.target.value });
/*     console.log(signinData,"signinData");
 */  };
  const handleSubmit =  async (event) => {
    event.preventDefault();

    try {
      const data  = await api.signin(signinData);
      if (data.model.Role === 'administratif') {
    console.log(data,"data");
      localStorage.setItem('profile', JSON.stringify({ ...data?.model }))
       const token = data.mytoken;
      localStorage.setItem('token', token)
      navigate('/');

    }
    if (data.model.Role === 'enseignant') {
      console.log(data,"data");
        localStorage.setItem('profile', JSON.stringify({ ...data?.model }))
         const token = data.mytoken;
        localStorage.setItem('token', token)
        navigate('/');
  
      }
      if (data.model.Role === 'alumni') {
        console.log(data,"data");
          localStorage.setItem('profile', JSON.stringify({ ...data?.model }))
           const token = data.mytoken;
          localStorage.setItem('token', token)
          navigate('/');
      }

        if (data.model.Role === 'etudiant') {
          console.log(data,"data");
            localStorage.setItem('profile', JSON.stringify({ ...data?.model }))
             const token = data.mytoken;
            localStorage.setItem('token', token)
            navigate('/');
      
          }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
        <Typography component="h1" variant="h5">
          Se connecter
        </Typography>
        
        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone"
            name="phone"
            autoFocus
            onChange={handleChangePhone}
          />

          <FormControl
            fullWidth
            margin="normal"
            required
            label="Mot de passe"
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Mot de passe
            </InputLabel>
            <OutlinedInput
              onChange={handleChangePassword}
              variant="outlined"
              type={showPassword ? "text" : "password"}
              id="password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Se connecter
          </Button>
          <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Mot de passe oublié?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                Vous n'avez pas de compte ? S'inscrire
                </Link>
              </Grid>
            </Grid>
        </form>
      </Box>
    </Container>
  );
}

export default Signin;
