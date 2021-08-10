import './scss/app.scss';
import React from "react";
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainSection/>
      <Footer/>
    </div>
  );
}

export default App;
