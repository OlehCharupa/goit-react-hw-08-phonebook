import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import { navigation } from "../constants"


const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path={navigation.home} component={Home} />
        <Route path={navigation.registration} component={Registration} />
        <Route path={navigation.login} component={Login} />
        <Redirect path={navigation.login} />
      </Switch>
    </div>
  );
};

export default App;