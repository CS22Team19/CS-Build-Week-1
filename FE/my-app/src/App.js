import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from "./containers/Login";


function App() {
  return (
    <div className="App">
       <Switch>
       <Route exact path="/" component={Login} />
       </Switch>
    </div>
  );
}

export default App;
