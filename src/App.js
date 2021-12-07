import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Tienda from './screens/Tienda'
import { QuienesSomos } from './screens/QuienesSomos';
import "./App.css"

function App() {

  return (
    <div className="App">
     
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link className="link" to="/">Quienes Somos</Link>
              </li>
              <li>
                <Link className="link" to="/tienda">Tienda</Link>
              </li>
            </ul>
          </nav>


          <Switch>

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
