import React, {useEffect, useState} from "react";
import Entry from "./Entry";
const API = "http://localhost:3000";

export default function MainSection() {
    const [entries, setEntries] = useState([]);
    const [deletion, setDeletion] = useState(false);
    useEffect(()=> {
        fetch(`${API}/db`)
            .then(response => response.json())
            .then(({entries}) => {
                setEntries(entries);
            })
            .catch(error => {
                console.log(error);
            });
    },[deletion]);

    return (
        <section className="main-section">
            {entries.length ? entries.map((entry, index) => {
                return (
                    <Entry entry={entry} setDeletion={setDeletion} deletion={deletion} key={index}/>
                );
            }) : <p>loading...</p>}
        </section>
    );
}