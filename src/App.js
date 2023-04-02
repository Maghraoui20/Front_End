import './App.css';

import {
  BrowserRouter as Router,Routes , Route
} from 'react-router-dom'
import Signin from './componenets/signin/signin.js';
import CreateEnseignant from './components/crud_enseignant/create_enseignant/create_enseignant';
import UpdateEnseignant from './components/crud_enseignant/update_enseignant/update_enseignant';
import ReadEnseignant from './components/crud_enseignant/read_enseignant/read_enseignant';
import CreateEtudiant from './components/crud_etudiant/create_etudiant/create_etudiant';
import UpdateEtudiant from './components/crud_etudiant/update_etudiant/update_etudiant';
import ReadEtudiant from './components/crud_etudiant/read_etudiant/read_etudiant';

function App() {
  return (
    <div className="App">
<Router>
  <Routes>
  <Route path="/signin" element ={ <Signin/>} />

<Route path="/create-enseignant" element ={<CreateEnseignant/>} />
<Route path="/update-enseignant/:id" element ={<UpdateEnseignant/>} />
<Route path="/readall-enseignant" element ={<ReadEnseignant/>} />

   <Route path="/create-etudiant" element ={<CreateEtudiant/>} />
   <Route path="/update-etudiant/:id" element ={<UpdateEtudiant/>} />

   <Route path="/readall-etudiant" element ={<ReadEtudiant/>} />

  </Routes>
</Router>

    
    </div>
  );
}

export default App;