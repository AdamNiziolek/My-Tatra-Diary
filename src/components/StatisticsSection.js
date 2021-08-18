import React from "react";

export default function StatisticsSection(props) {
    const lastEntryDate = props.entry[props.entry.length-1].date;
    const lastEntryYear = parseInt(lastEntryDate.substring(0,4));
    const lastEntryMonth = parseInt(lastEntryDate.substring(5,7))-1;
    const lastEntryDay = parseInt(lastEntryDate.substring(8,10));
    const lastDay = new Date(lastEntryYear, lastEntryMonth, lastEntryDay);
    const todayDate = new Date();
    const amountOfDays=Math.floor((todayDate-lastDay)/86400000);


    return (
        <div className="statistics-container">
            <h2>Interesting facts</h2>
            <ul className="statistics-list">
                <li>Last time in Tatra Mountains: {amountOfDays} days ago</li>
                <li>Times in the Tatra Mountains: {props.entry.length}</li>
                <li>Total time spent in the mountains: {props.entry.length} hours</li>
                <li>Average duration of the trip: {props.entry.length} hours</li>
            </ul>
        </div>
    );
}
