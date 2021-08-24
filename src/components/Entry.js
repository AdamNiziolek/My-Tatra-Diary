import React from "react";
import { db } from '../firebase'
import { useAuth } from '../contexts/AuthContext';

export default function Entry(props) {
    let {id, date, timeStart, timeEnd, goal, entry, photo} = props.entry;
    const { currentUser } = useAuth();
    
    const handleDelete = (e) => {
        e.preventDefault();

        db.collection(currentUser.email).doc(id).delete().then(() => {
            props.setDeletion(!props.deletion);
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    };

    return (
        <div className="entry-container">
            <img className="entry-photo" src={photo} alt="Tatra Mountains" />
            <div className="entry-name">
                <div className="entry-delete" onClick={handleDelete}>
                    <i class="far fa-trash-alt"></i>
                </div>
                <div className="entry-date">
                    <h2>{date}</h2>
                    <div className="entry-time">
                        <p>Start: {timeStart}</p>
                        <p>End: {timeEnd}</p>
                    </div>
                </div>
                <div className="entry-track">
                    <p>Goal of my hike: {goal} </p>
                </div>
                <p className="entry-text">{entry}</p>
            </div>
        </div>
    );
}
