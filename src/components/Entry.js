import React from "react";
const API = "http://localhost:3000";
//.env

export default function Entry(props) {
    let {id, date, timeStart, timeEnd, goal, entry} = props.entry;
        
    const handleDelete = (e) => {
        fetch(`${API}/entries/${id}`, {
            method: "DELETE"
          })
            .then(response => {
              props.setDeletion(!props.deletion);
            })
            .catch(error => {
              console.log(error);
            });
    };

    return (
        <div className="entry-container">
            <div className="entry-photo" />
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
