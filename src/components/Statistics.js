import React, {useState, useEffect} from "react";
import Header from './Header';
import StatisticsSection from './StatisticsSection';
import Footer from './Footer';

const API = "http://localhost:3000";

function Statistics() {
    const [entries, setEntries] = useState([]);
    useEffect(()=> {
        fetch(`${API}/db`)
            .then(response => response.json())
            .then(data => {
                setEntries(data.entries);
            })
            .catch(error => {
                console.log(error);
            });
    },[]);

    return (
        <div className="App">
            <Header/>
            <section className="main-section">
                {entries.length ? <StatisticsSection entry={entries}/> : <p>loading...</p>}
            </section>
            <Footer/>
        </div>
    );
}

export default Statistics;