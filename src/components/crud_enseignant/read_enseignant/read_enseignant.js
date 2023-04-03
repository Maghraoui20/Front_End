import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import * as api from "../../../services/enseignant.js";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";
import { Box, Button, Paper, Typography } from "@mui/material";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import "./style.css";

function ReadEnseignant() {
  const [rows, setRows] = useState([]);
  const [idSelected, setIdSelected] = useState();

  const handleDelete = async () => {
    try {
       await api.deleteEnseignant(idSelected);
       window.location.reload(false)
          } catch (error) {
      console.log(error);
    }
  };

  const navigate= useNavigate();

  const handleCreate = async()=>{
    navigate("/create-enseignant")
   }

 useEffect(() => {
    async function fetchData() {
      try {
        const result = await api.getAllEnseignant();
        setRows(result);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);
 
  const columns = [
    { field: "firstname",
     headerName: "prenom",
      width: 100 },
    {
      field: "lastname",
      headerName: "nom",
      width: 100
    },
    {
      field: "email",
      headerName: "email",
      width: 100
    },
    {
      field: "phone",
      headerName: "numero de telephone",
      width: 100
    },
    { field: "login", headerName: "login", width: 100 },
    { field: "password", headerName: "password", width: 100 },
    { field: "status", headerName: "status", width: 100 },
    {
      field: "modifer",
      headerName: "Modifier",
      width: 130,
      renderCell: (params) => {
        return (
          <Button
            variant="contained"
            href={`/update-enseignant/${idSelected}`}
            sx={{
              backgroundColor: "#00A36C",
              ":hover": { backgroundColor: "#00A36C" },
            }}
          >
            
            <EditIcon/>
          </Button>
        );
      },
    },
    {
      field: "supprimer",
      headerName: "Supprimer",
      width: 130,
      renderCell: (params) => {
        return (
          <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
            
              <div>
                <Button
                  variant="contained"
                  {...bindTrigger(popupState)}
                  sx={{
                    backgroundColor: "#FC4343",
                    ":hover": { backgroundColor: "#FC4343" },
                  }}
                >
                  
                  <DeleteIcon />
                </Button>
                <Popover
                  {...bindPopover(popupState)}
               
                >
                  <Box
                    sx={{
                      p: 5,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography>
                      Voulez vous vraiment supprimer cet enseignant
                    </Typography>
                    <div className="buttons">
                      <Button
                        variant="contained"
                        className="confirm"
                        sx={{
                          m: 4,
                          backgroundColor: "#00A36C",
                          ":hover": { backgroundColor: "#00A36C" },
                        }}
                        onClick={()=>{handleDelete(); popupState.close()}}
                      >
                        Oui
                      </Button>
                      <Button
                        variant="contained"
                        className="annuler"
                        sx={{
                          backgroundColor: "#FC4343",
                          ":hover": { backgroundColor: "#FC4343" },
                        }}
                        onClick={popupState.close}
>
                        Annuler
                      </Button>
                    </div>
                  </Box>
                </Popover>
              </div>
            )}
          </PopupState>
        );
      },
    },
  
  ];


  return (
    <Container >
        
      <Box
        sx={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ height: 400 }}>
        <div><h1><b>Liste des enseignants</b></h1></div>
        <div style={{float : "right"}}>
        <IconButton 
        aria-label="add" 
        color="secondary"
         onClick={handleCreate} 
         style={{ color:"#000"}} >
       <AddBoxRoundedIcon />
       </IconButton>
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
            checkboxSelection
            disableRowSelectionOnClick
            hideFooter="true"
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

export default ReadEnseignant;