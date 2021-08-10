import React, {useEffect, useState} from "react";
import Entry from "./Entry";
const API = "http://localhost:3000";

export default function MainSection() {
    const [entries, setEntries] = useState([]);
    useEffect(()=> {
        console.log('?')
        fetch(`${API}/db`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setEntries(data.entries);
            })
            .catch(error => {
                console.log(error);
            });
    },[]);

    return (
        <section className="main-section">
            {entries.length ? entries.map((entry, index) => {
                return (
                    <Entry entry={entry} key={index}/>
                );
            }) : <p>loading...</p>}
        </section>
    );
}