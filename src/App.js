import './scss/app.scss';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import SignUp from './components/SignUp';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import Home from './components/Home';
import AddEntry from './components/AddEntry';
import Statistics from './components/Statistics';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/signup" component={SignUp}/>
          <Route path="/login" component={Login}/>
          <Route path="/forgot-password" component={ForgotPassword}/>
          <PrivateRoute path="/add" component={AddEntry}/>
          <PrivateRoute path="/statistics" component={Statistics}/>
          <PrivateRoute exact path="/" component={Home}/>
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default App;
