import "./App.css";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";


import UpdateEtudiantCV from "./components/update_etudiant/update_etudiant";

import {
  BrowserRouter as Router,Routes , Route
} from 'react-router-dom'
import Signin from './components/signin/signin.js';
import CreateEnseignant from './components/crud_enseignant/create_enseignant/create_enseignant';
import UpdateEnseignant from './components/crud_enseignant/update_enseignant/update_enseignant';
import ReadEnseignant from './components/crud_enseignant/read_enseignant/read_enseignant';
import CreateEtudiant from './components/crud_etudiant/create_etudiant/create_etudiant';
import UpdateEtudiant from './components/crud_etudiant/update_etudiant/update_etudiant';
import ReadEtudiant from './components/crud_etudiant/read_etudiant/read_etudiant';
import UploadFileCSV from './components/crud_etudiant/uploadFileCSV/uploadFileCSV';
import CreateEvenement from './components/crud_evenement/create_evenement/create_evenement';
import UpdateEvenement from './components/crud_evenement/update_evenement/update_evenement';
import ReadEvenement from './components/crud_evenement/read_evenement/read_evenement';
export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Router>
          <Routes>
          <Route path="/signin" element ={ <Signin/>} />

<Route path="/create-enseignant" element ={<CreateEnseignant/>} />
<Route path="/update-enseignant/:id" element ={<UpdateEnseignant/>} />
<Route path="/readall-enseignant" element ={<ReadEnseignant/>} />

   <Route path="/create-etudiant" element ={<CreateEtudiant/>} />
   <Route path="/update-etudiant/:id" element ={<UpdateEtudiant/>} />
   <Route path="/readall-etudiant" element ={<ReadEtudiant/>} />
   <Route path="/update-etudiant-cv" element={<UpdateEtudiantCV />} />
    <Route path="/uploadfilecsv-etudiant" element ={<UploadFileCSV/>} />

    <Route path="/create-evenement" element ={<CreateEvenement/>} />
    <Route path="/update-evenement/:id" element ={<UpdateEvenement/>} />
    <Route path="/readall-evenement" element ={<ReadEvenement/>} />
          </Routes>
        </Router>
        <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;