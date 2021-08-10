import React from "react";

export default function Entry(props) {
    let {date, timeStart, timeEnd, goal, photo, entry} = props.entry;
    console.log(props.entry);
    return (
        <div className="entry-container">
            <div className="entry-photo" />
            <div className="entry-name">
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
