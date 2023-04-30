import SideNavAdmin from "../sidenavs/sidenavAdmin";
import SideNavEtd from "../sidenavs/sidenav";
import MySideNavAlum from "../sidenavs/sidenav";
import SideNavEns from "../sidenavs/sidenavens";
import SideNavDir from "../sidenavs/sidenavdir";
import Fragment from "./fragment";

export default function ChangePassword() {
  const user = JSON.parse(localStorage.getItem("profile"));
  const _class = user.role;
  return (
    <>
      {_class === "alumni" && <MySideNavAlum />}
      {_class === "etudiant" && <SideNavEtd />}
      {_class === "administratif" && <SideNavAdmin />}
      {_class === "enseignant" && <SideNavEns />}
      {_class === "directeur" && <SideNavDir />}
      <Fragment />
    </>
  );
}
