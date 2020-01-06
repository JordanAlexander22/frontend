import React from 'react';
import logo from './logo.svg';
import {Switch, Route} from "react-router-dom"
import './App.css';
import LandingPage from './Components/LandingPage';

function App() {
  return (
    <Switch>
      <Route path="/client_sign_up">

      </Route>
      <Route path="/instructor_sign_up">

      </Route>
      <Route path="/">
      <LandingPage />
      </Route>
      

    </Switch>
    
  );
}

export default App;
