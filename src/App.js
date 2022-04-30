import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/app.scss';
import SignUp from './components/Authorization/SignUp';
import Login from './components/Authorization/Login';
import ForgotPassword from './components/Authorization/ForgotPassword';
import Home from './components/Home/Home';
import AddEntry from './components/AddEntry/AddEntry';
import Statistics from './components/Statistics/Statistics';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <PrivateRoute path="/add" component={AddEntry} />
          <PrivateRoute path="/statistics" component={Statistics} />
          <PrivateRoute exact path="/" component={Home} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
