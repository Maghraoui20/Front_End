import { Button } from "@mui/material";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function MySideNav() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("profile");
    localStorage.removeItem("token");
  };

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const statutEtudiant = user?.etat;

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
        <NavItem eventKey="add-Alumni">
          <NavIcon>
            <i className="fa-regular fa-hashtag" style={{ fontSize: "1em" }} />
          </NavIcon>
          <NavText>Demande Compte Alumni</NavText>
        </NavItem>
        <NavItem eventKey="update-etudiant-cv">
          <NavIcon>
            <i className="fa fa-fw fa-hashtag" style={{ fontSize: "1em" }} />
          </NavIcon>
          <NavText>Modifier profil</NavText>
        </NavItem>

        {statutEtudiant == "actuel" ? (
          <NavItem eventKey="insérer-stage-été">
            <NavIcon>
              <i className="fa fa-fw fa-hashtag" style={{ fontSize: "1em" }} />
            </NavIcon>
            <NavText>Stage été</NavText>
          </NavItem>
        ) : null}
        {statutEtudiant == "actuel" ? (
          <NavItem eventKey="insérer-stage-pfe">
            <NavIcon>
              <i className="fa fa-fw fa-hashtag" style={{ fontSize: "1em" }} />
            </NavIcon>
            <NavText>Stage pfe</NavText>
          </NavItem>
        ) : null}
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
