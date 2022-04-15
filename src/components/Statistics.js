import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Header from './Header';
import StatisticsSection from './StatisticsSection';
import Footer from './Footer';
import { collection, getDocs } from "firebase/firestore"; 
import { db } from '../firebase'
import { useAuth } from '../contexts/AuthContext';

function Statistics() {
    const [entries, setEntries] = useState([]);
    const { currentUser } = useAuth();

    useEffect(()=> {
        setEntries('');
        async function getDocuments() {
            const querySnapshot = await getDocs(collection(db, currentUser.email));
            querySnapshot.forEach((doc) => {
                const entry = doc.data();
                entry.id = doc.id;
                setEntries(prevState => [...prevState, entry]);
            });
        }
        getDocuments();
    },[currentUser]);

    return (
        <div className="App">
            <Header/>
            <section className="main-section">
                {entries.length ? <StatisticsSection entries={entries}/> 
                :   <div className="noEntry-section">
                        <Link to="/add" className="noEntry-section__link">
                            Welcome, dear Tatra hiker! <br/>
                            Add your first entry!                       
                        </Link>
                    </div>}                
            </section>
            <Footer/>
        </div>
    );
}

export default Statistics;