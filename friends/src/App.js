import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <ul className='navigation'>
            <li><Link to='/'>Login</Link></li>
            <li><Link to='/Home'>Home</Link></li>
          </ul>
        </div>
        <Switch>
          <Route exact path='/' component={Login} />
          <PrivateRoute path='/Home' component={Home} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
