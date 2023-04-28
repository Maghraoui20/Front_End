import "./App.css";
import { createContext, useEffect, useState } from "react";
import ReactSwitch from "react-switch";

import UpdateEtudiantCV from "./components/update_etudiant/update_etudiant";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signin from "./components/signin/signin.js";
import CreateEnseignant from "./components/crud_enseignant/create_enseignant/create_enseignant";
import UpdateEnseignant from "./components/crud_enseignant/update_enseignant/update_enseignant";
import ReadEnseignant from "./components/crud_enseignant/read_enseignant/read_enseignant";
import CreateEtudiant from "./components/crud_etudiant/create_etudiant/create_etudiant";
import UpdateEtudiant from "./components/crud_etudiant/update_etudiant/update_etudiant";
import ReadEtudiant from "./components/crud_etudiant/read_etudiant/read_etudiant";
import CreateEvenement from "./components/crud_evenement/create_evenement/create_evenement";
import UpdateEvenement from "./components/crud_evenement/update_evenement/update_evenement";
import ReadEvenement from "./components/crud_evenement/read_evenement/read_evenement";
import AddAlumni from "./components/compte_alumni/addAlumni/index";
import Administratif from "./components/administratif/index";
import Enseignant from "./components/enseignant/index";

import ForgotPassword from "./components/forgot_password/index";
import PasswordReset from "./components/PasswordReset/index";
import PrivateRoute from "./components/PrivateRoutes/privateroute.js";
import EspacEtudiant from "./components/espaceEtudiant/espaceEtudiant";
import CreateStageEté from "./components/stage/stage-été";
import CreateStagePfe from "./components/stage/stage-pfe";
import ReadPFE from "./components/pfe/listePfeforAdmin";
import PfeEnseignant from "./components/enseignant/listePfe";
import MesStageEte from "./components/stage/mesStagesEtes";
import UpdateStage from "./components/stage/updateStageEte";
import MesStagePFE from "./components/stage/mesStagePfe";
import MesPFE from "./components/enseignant/mesPfe";
import UpdateStagePFE from "./components/stage/updateStagePFE";
import Statistique from "./components/statistics/statistics";
import AnneeUniv from "./components/administratif/annéeuniversitaire";
import * as apiet from "./service/etudiant.js";
import AllNotification from "./components/espaceEtudiant/allnotification";
import { ToastContainer } from "react-toastify";

/* export const ThemeContext = createContext(null);
 */
function App() {

  useEffect(() => {
    async function fetchData() {
      try {

        

        const result = await apiet.sendmail();
        const result2 = await apiet.sendmailcmp();

        const result3 = await apiet.sendmailtravail();

  

      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);
/*   const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }; */

  return (
/*     <ThemeContext.Provider /* value={{ theme, toggleTheme }} >
 */      <div className="App" /* id={theme} */>
     {/*  <div className="switch">
        <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
      </div> */}
        <Router>
          <Routes>
          <Route path="/" element={<Navigate replace to="/signin" />} />
            <Route path="/signin" element={<Signin />} />

              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route  path="/password-reset/:id/:token"   element={<PasswordReset />}   />


             <Route path="/" element={<PrivateRoute />}>
             <Route path="/espace-etudiant" element={<EspacEtudiant />} />

              <Route path="/create-enseignant" element={<CreateEnseignant />} />
              <Route     path="/update-enseignant/:id"    element={<UpdateEnseignant />}             />
              <Route path="/administratif" element={<Administratif />} />
              <Route path="/enseignant" element={<Enseignant />} />

              <Route path="/readall-enseignant" element={<ReadEnseignant />} />

              <Route path="/create-etudiant" element={<CreateEtudiant />} />
              <Route path="/update-etudiant/:id" element={<UpdateEtudiant />} />
              <Route path="/readall-etudiant" element={<ReadEtudiant />} />
              <Route path="/add-Alumni" element={<AddAlumni />} />
              <Route path="/insérer-stage-été" element={<CreateStageEté />} />
              <Route path="/insérer-stage-pfe" element={<CreateStagePfe />} />

              <Route
                path="/update-etudiant-cv" element={<UpdateEtudiantCV />}   />
              <Route
                path="/update-stageete/:id" element={<UpdateStage />}   />

<Route
                path="/update-stagePFE/:id" element={<UpdateStagePFE />}   />
              <Route path="/create-evenement" element={<CreateEvenement />} />
              <Route   path="/update-evenement/:id" element={<UpdateEvenement />}   />
              <Route path="/readall-evenement" element={<ReadEvenement />} />
              <Route path="/readall-pfe" element={<ReadPFE />} />
              <Route path="/mes-stage-été" element={<MesStageEte />} />
              <Route path="/mes-stage-pfe" element={<MesStagePFE />} />
              <Route path="/liste-mes-pfe" element={<MesPFE />} />

              <Route path="/liste-pfe" element={<PfeEnseignant />} />
              <Route path="/statistics-pfe" element={<Statistique />} />
              <Route path="anneeuniver" element={<AnneeUniv />} />
              <Route path="/allnotification" element={<AllNotification />} />

            </Route>

          </Routes>
        </Router>
        <ToastContainer/>

      </div>
    
    // </ThemeContext.Provider> 
  );
}

export default App;
