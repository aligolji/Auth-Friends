import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';

import FriendList from './components/FriendList';
import Login from './components/Login';
import AddFriend from './components/AddFriend';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/friendslist'>Friends List</Link>
          </li>
          <li>
            <Link to='/form'>Add Friend</Link>
          </li>
        </ul>
        <Switch>
          <Route path='/login' component={Login} />
          <PrivateRoute exact path='/friendslist' component={FriendList} />
          <PrivateRoute exact path='/form' component={AddFriend} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
