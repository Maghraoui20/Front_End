import './App.css';

import {
  BrowserRouter as Router,Routes , Route
} from 'react-router-dom'
import CreateEvenement from './components/crud_evenement/create_evenement/create_evenement';
import UpdateEvenement from './components/crud_evenement/update_evenement/update_evenement';
import ReadEvenement from './components/crud_evenement/read_evenement/read_evenement';

function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
    <Route path="/create-evenement" element ={<CreateEvenement/>} />
    <Route path="/update-evenement/:id" element ={<UpdateEvenement/>} />
    <Route path="/readall-evenement" element ={<ReadEvenement/>} />
  
    </Routes>
    </Router>

    
    </div>
  );
}

export default App;