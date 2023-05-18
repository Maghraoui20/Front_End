import React, { Component }  from 'react';
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import * as api from "../../../service/evenement.js";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";
import { Box, Button, FormControl, InputLabel, MenuItem, Paper, Select, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";

import MySideNav from "../../sidenavs/sidenavactuel.js";

function ReadEvenement() {
  const [rows, setRows] = useState([]);
  
  const [open, setOpen] = useState(false);
  const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };


  useEffect(() => {
    async function fetchData() {
      try {
        const result = await api.getAllEvenement();
        setRows(result);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  const columns = [
    { field: "eventName", headerName: "Titre", width: 130 },
    {
      field: "eventDate",
      headerName: "Date ",
      width: 160,
      renderCell: (params) => {
        return (
          <Typography>
            {moment(params.row.eventDate).format("YYYY-MM-DD")}
          </Typography>
        );
      },
    },
    { field: "eventType", headerName: "Type ", width: 130 },
    { field: "description", headerName: "description ", width: 130 },
    { field: "location", headerName: "location ", width: 130 },
   
  ];

  return (
    <Container>
      <MySideNav/>
 
    
{
    /*
      <label for="Année universitaire">Année universitaire</label>

    <select
   data-test="anneeUvivgenerate"
   open={open}
   onClose={handleClose}
   onOpen={handleOpen}
   value={annee}
   label="anneeUviv"
   onChange={handleChangeAnnee} 
  style={{ width: "100%", height: "50px" }}
>
  <option value={"2021-2022"}>2021-2022</option>
  <option value={"2022-2023"}>2022-2023</option>
  <option value={"2023-2024"}>2023-2024</option>
  <option value={"2024-2025"}>2024-2025</option>
  <option value={"2026-2027"}>2026-2027</option>

</select>
    */

}

      <Box
        sx={{
          marginTop: 10,
          display: "flex",
        
          flexDirection: "column",
          alignItems: "center",
        }}
      >
         
        <div style={{ height: 400 }}>
          <div>
            <h1><center> <b>Liste des evenements</b></center>
             
            </h1>
          </div>
         

          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
           // checkboxSelection
           // disableRowSelectionOnClick
            hideFooter="true"
            getRowId={(row) => row._id}
          
          />
        </div>
      </Box>
    </Container>
  );
}

export default ReadEvenement;
