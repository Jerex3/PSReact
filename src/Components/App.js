import React from 'react';
import Slidebar from './Slidebar.js'
import Users from './Users'
import Cards from './Cards'
import json from '../Simulacion.json'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    
  
    <Slidebar></Slidebar>
    
     
    <Switch>

     <Route path="/users">
        <Users></Users>
     </Route>

     <Route path="/" exact>

      <div style = {{marginLeft:'15%'}}>
        <Cards Carpas ={json}></Cards>
      </div>
      
     </Route>

     </Switch>
    
     

    
    </Router>
    
  );
}

export default App;
