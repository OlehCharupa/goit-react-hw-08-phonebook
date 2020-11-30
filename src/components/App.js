import React, { useEffect } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './Header/Header';
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import { navigation } from "../constants"
import './App.css';


const App = () => {
  const token = useSelector(state => state.token)
  const history = useHistory()

  useEffect(() => {
    if (token) {
      history.push(navigation.home)
    } else {
      history.push(navigation.login)
    }
  }, [token])
  return (
    <div className="App">
      <Header />
      <Switch>
        {token
          ? <Route exact path={navigation.home} component={Home} />
          : <Route path={navigation.login} component={Login} />
        }
        {/* <Route exact path={navigation.home} component={Home} /> */}
        <Route path={navigation.registration} component={Registration} />
        <Route path={navigation.login} component={Login} />
        <Redirect path={navigation.login} />
      </Switch>
    </div>
  );
};

export default App;