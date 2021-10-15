import React from "react";
import './App.css'
import axios from "axios";
import { Route } from "react-router-dom";
import HomePage from './HomePage'

const App = () => {
  return (
    <div className='App'>
      <Route path='/pizza'>
        <Pizza />
      </Route>
      <Route exact path='/'>
        <HomePage />
      </Route>
    </div>
  );
};
export default App;
