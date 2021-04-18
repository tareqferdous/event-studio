import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Dashboard from './components/Dashboard/Dashbard/Dashboard';
import AddService from './components/AddService/AddService';
import ManageService from './components/Home/ManageService/ManageService';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AddReview from './components/Dashboard/AddReview/AddReview';
import CheckOut from './components/Home/CheckOut/CheckOut';
import Shipment from './components/Home/Shipment/Shipment';
import ShowOrder from './components/Home/ShowOrder/ShowOrder';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name: '',
    email: ''
  });
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/showOrder">
          <ShowOrder></ShowOrder>
        </PrivateRoute>
        <PrivateRoute path="/checkout/:id">
          <CheckOut></CheckOut>
        </PrivateRoute>
        <Route path="/shipment">
          <Shipment></Shipment>
        </Route>
        
        <PrivateRoute path="/dashboard">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <Route path="/addService">
          <AddService></AddService>
        </Route>
        <PrivateRoute path="/addReview">
          <AddReview></AddReview>
        </PrivateRoute>
        <Route path="/manageService">
          <ManageService></ManageService>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
