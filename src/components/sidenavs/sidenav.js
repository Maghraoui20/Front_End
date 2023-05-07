import React, { Component }  from 'react';
import { MailLockOutlined } from "@mui/icons-material";
import { Badge, Button, IconButton } from "@mui/material";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { ToastContainer, toast } from "react-toastify";
import io from 'socket.io-client';
import * as api from '../../service/notification';
function MySideNav() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("profile");
    localStorage.removeItem("token");
  };


  return (
    <SideNav
      onSelect={(selected) => {
        console.log(selected);
        navigate("/" + selected);
      }}
      style={{ backgroundColor: "#3bb19b" }}
    >
      <SideNav.Toggle />

      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="change-password">
          <NavIcon>
            <i className="fa-regular fa-hashtag" style={{ fontSize: "1em" }} />
          </NavIcon>
          <NavText>Changer mot de passe</NavText>
        </NavItem>
        <NavItem eventKey="update-etudiant">
          <NavIcon>
            <i className="fa fa-fw fa-hashtag" style={{ fontSize: "1em" }} />
          </NavIcon>
          <NavText>Modifier profil</NavText>
        </NavItem>
        <NavItem eventKey="update-cv/:id">
          <NavIcon>
            <i className="fa-regular fa-hashtag" style={{ fontSize: "1em" }} />
          </NavIcon>
          <NavText>Modifier CV</NavText>
        </NavItem>
     
        <NavItem eventKey="signin">
          <NavIcon>
            <i className="fa-regular fa-hashtag" style={{ fontSize: "1em" }} />
          </NavIcon>
          <NavText>
            <Button onClick={handleLogout}>Logout</Button>
          </NavText>
        </NavItem>
    
      </SideNav.Nav>

    </SideNav>
  );
}
export default MySideNav;