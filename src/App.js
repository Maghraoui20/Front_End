import './App.css';

import {
  BrowserRouter as Router,Routes , Route
} from 'react-router-dom'
import CreateEtudiant from './components/crud_etudiant/create_etudiant/create_etudiant';
import UpdateEtudiant from './components/crud_etudiant/update_etudiant/update_etudiant';
import ReadEtudiant from './components/crud_etudiant/read_etudiant/read_etudiant';
import UploadFileCSV from './components/crud_etudiant/uploadFileCSV/uploadFileCSV'
function App() {
  return (
    <div className="App">
<Router>
  <Routes>
   <Route path="/create-etudiant" element ={<CreateEtudiant/>} />
   <Route path="/update-etudiant/:id" element ={<UpdateEtudiant/>} />
   <Route path="/readall-etudiant" element ={<ReadEtudiant/>} />
   <Route path="/uploadfilecsv-etudiant" element ={<UploadFileCSV/>} />

  </Routes>
</Router>

    
    </div>
  );
}

export default App;