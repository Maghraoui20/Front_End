import "./App.css";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UpdateEtudiant from "./components/update_etudiant/update_etudiant";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Router>
          <Routes>
            <Route path="/update-etudiant/:id" element={<UpdateEtudiant />} />
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
