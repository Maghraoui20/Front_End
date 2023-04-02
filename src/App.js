import './App.css';

import {
  BrowserRouter as Router,Routes , Route
} from 'react-router-dom'
import Signin from './componenets/signin/signin.js';

function App() {
  return (
    <div className="App">
<Router>
  <Routes>
  <Route path="/signin" element ={ <Signin/>} />


  </Routes>
</Router>

    
    </div>
  );
}

export default App;
