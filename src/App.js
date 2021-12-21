import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Tienda from './screens/Tienda'
import { QuienesSomos } from './screens/QuienesSomos';
import Galeria from './screens/Galeria'
import "./App.css"
import CottageIcon from '@mui/icons-material/Cottage';
import StoreIcon from '@mui/icons-material/Store';
import CameraIcon from '@mui/icons-material/Camera';

function App() {

  return (
    <div className="App">
     
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link className="link" to="/"><CottageIcon fontSize="large" /></Link>
              </li>
              <li>
                <Link className="link" to="/tienda"><StoreIcon fontSize="large"/></Link>
              </li>
              <li>
                <Link className="link" to="/galeria"><CameraIcon fontSize="large"/></Link>
              </li>
            </ul>
          </nav>


          <Switch>
          <Route path="/galeria">
              <Galeria/>
            </Route>

            <Route path="/tienda">
              <Tienda/>
            </Route>
            <Route path="/">
              <QuienesSomos />
            </Route>
          </Switch>
        </div>
      </Router>
      

    </div>
  );
}

export default App;
