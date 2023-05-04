import { Badge, IconButton } from "@mui/material";
import React, { Component }  from 'react';
import styles from "../administratif/styles.module.css";
import MySideNav from "../sidenavs/sidenav";
import { MailLockOutlined } from "@mui/icons-material";
const EspacEtudiant = () => {
 
  

  return (
    <div className={styles.main_container}>
      <MySideNav />
    </div>
  );
};

export default EspacEtudiant;
