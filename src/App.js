import './App.css';

import {
  BrowserRouter as Router,Routes , Route
} from 'react-router-dom'
import CreateEnseignant from './components/crud_enseignant/create_enseignant/create_enseignant';
import UpdateEnseignant from './components/crud_enseignant/update_enseignant/update_enseignant';
import ReadEnseignant from './components/crud_enseignant/read_enseignant/read_enseignant';

function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
    <Route path="/create-enseignant" element ={<CreateEnseignant/>} />
    <Route path="/update-enseignant/:id" element ={<UpdateEnseignant/>} />
    <Route path="/readall-enseignant" element ={<ReadEnseignant/>} />
  
    </Routes>
    </Router>

    
    </div>
  );
}

export default App;