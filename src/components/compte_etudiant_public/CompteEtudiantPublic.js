import React, { Component }  from 'react';
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import * as api from "../../service/etudiant";
import { DataGrid } from "@mui/x-data-grid";

import { Box, Button } from "@mui/material";



import { useNavigate } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';

  import MySideNav from "../../components/sidenavs/sidenavactuel";
 
 
  
  function CompteEtudiantPublic() {
    const [rows, setRows] = useState([]);
    const [idSelected, setIdSelected] = useState();
    const navigate = useNavigate();

  
  
  
    const columns = [
      { field: "firstname", headerName: "Nom", width: 130 },
      { field: "lastname", headerName: "Prénom", width: 130 },
  
      { field: "niveau", headerName: "Niveau ", width: 130 },
   

      {
        field: "voir compte",
        headerName: "Voir Compte ",
        width: 130,
        renderCell: (params) => {
          return (
            <Button
              variant="contained"
              href={`/detail_etudiant/${idSelected}`}
              sx={{
                backgroundColor: "#2979ff",
                ":hover": { backgroundColor: "#2979ff" },
              }}
            >
              <PersonIcon />
            </Button>
          );
        },
      }
    ];
  
    useEffect(() => {
      async function fetchData() {
        try {
          const result = await api.getPublicCompteEtudiant();
          console.log(result);
          setRows(result);
        } catch (e) {
          console.log(e);
        }
      }
      fetchData();
    }, []);
  
    return (
      <Container maxWidth="md">
        <MySideNav />
  
        <Box
          sx={{
            marginTop: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ height: 400 }}>
           
  
            <DataGrid
            data-test="row-etudiant"
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
              checkboxSelection
              disableRowSelectionOnClick
              getRowId={(row) => row._id}
              onRowSelectionModelChange={(newRowSelectionModel) => {
                setIdSelected(newRowSelectionModel.toString());
              }}
            />
          </div>
        </Box>
      </Container>
    );
    
}
  export default CompteEtudiantPublic;
  