import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Hello</div>
        <Switch>
          <Route>
            <Home /> 
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
