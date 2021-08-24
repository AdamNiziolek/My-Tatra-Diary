import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Entry from "./Entry";
import { db } from '../firebase'
import { useAuth } from '../contexts/AuthContext';

export default function MainSection() {
    const [entries, setEntries] = useState([]);
    const [deletion, setDeletion] = useState(false);
    const { currentUser } = useAuth();

    useEffect(()=> {
        setEntries('');
        db.collection(currentUser.email).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const entry = doc.data();
                entry.id = doc.id;
                setEntries(prevState => [...prevState, entry]);
            });
        });
    },[deletion]);

    return (
        <section className="main-section">
            {entries.length ? entries.map((entry, index) => {
                return (
                    <Entry entry={entry} setDeletion={setDeletion} deletion={deletion} key={index}/>
                );
            }) : <div className="noEntry-section">
                    <Link to="/add" className="noEntry-section__link">
                        Welcome, dear Tatra hiker! <br/>
                        Add your first entry!                       
                    </Link></div>}
        </section>
    );
}