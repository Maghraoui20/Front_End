import { Button } from "@mui/material";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { useNavigate } from "react-router-dom";
function MySideNav() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("profile");
   
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
        <NavItem eventKey="administratif">
          <NavIcon>
            <i className="fa fa-fw fa-home" style={{ fontSize: "1em" }} />
          </NavIcon>
          <NavText>Home</NavText>
        </NavItem>
        <NavItem eventKey="create-etudiant">
          <NavIcon>
            <i className="fa-regular fa-hashtag" style={{ fontSize: "1em" }} />
          </NavIcon>
          <NavText>Ajouter Etudiant</NavText>
        </NavItem>

        <NavItem eventKey="readall-etudiant">
          <NavIcon>
            <i className="fa-regular fa-hashtag" style={{ fontSize: "1em" }} />
          </NavIcon>
          <NavText>Liste etudiants</NavText>
        </NavItem>
        <NavItem eventKey="create-enseignant">
          <NavIcon>
            <i className="fa-regular fa-hashtag" style={{ fontSize: "1em" }} />
          </NavIcon>
          <NavText>Ajouter Enseignant</NavText>
        </NavItem>

        <NavItem eventKey="readall-enseignant">
          <NavIcon>
            <i className="fa-regular fa-hashtag" style={{ fontSize: "1em" }} />
          </NavIcon>
          <NavText>Liste enseignants</NavText>
        </NavItem>
        <NavItem eventKey="create-evenement">
          <NavIcon>
            <i className="fa-regular fa-hashtag" style={{ fontSize: "1em" }} />
          </NavIcon>
          <NavText>Ajouter evenement</NavText>
        </NavItem>

        <NavItem eventKey="readall-evenement">
          <NavIcon>
            <i className="fa-regular fa-hashtag" style={{ fontSize: "1em" }} />
          </NavIcon>
          <NavText>Liste evenement</NavText>
        </NavItem>

        <NavItem eventKey="signin">
        <NavIcon>
            <i className="fa-regular fa-hashtag" style={{ fontSize: "1em" }} />
          </NavIcon>
          <NavText><Button onClick={handleLogout}>Logout</Button></NavText>
       
        </NavItem>
    
      </SideNav.Nav>
    </SideNav>
  );
}
export default MySideNav;
