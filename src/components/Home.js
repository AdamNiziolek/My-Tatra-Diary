import React from "react";
import Header from './Header';
import MainSection from './MainSection';
import Footer from './Footer';

function Home() {
    return (
        <div className="App">
            <Header/>
            <MainSection/>
            <Footer/>
        </div>
    );
}

export default Home;