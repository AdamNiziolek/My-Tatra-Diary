import React from "react";

export default function StatisticsSection({entries}) {
    //Last time in Tatras
    const lastEntryDate = entries[entries.length-1].date;
    const lastEntryYear = parseInt(lastEntryDate.substring(0,4));
    const lastEntryMonth = parseInt(lastEntryDate.substring(5,7))-1;
    const lastEntryDay = parseInt(lastEntryDate.substring(8,10));
    const lastDay = new Date(lastEntryYear, lastEntryMonth, lastEntryDay);
    const todayDate = new Date();
    const amountOfDays=Math.floor((todayDate-lastDay)/86400000);

    //All time in Tatras
    let allTime = 0, timeStartHour, timeStartMinutes, timeEndHour, timeEndMinutes;
    entries.forEach(({timeStart, timeEnd}) => {
        if(timeStart.length === 4) {
            timeStartHour = parseInt(timeStart.substring(0,1));
            timeStartMinutes = parseInt(timeStart.substring(2,4));
        } else {
            timeStartHour = parseInt(timeStart.substring(0,2));
            timeStartMinutes = parseInt(timeStart.substring(3,5));
        }
        if(timeEnd.length === 4) {
            timeEndHour = parseInt(timeEnd.substring(0,1));
            timeEndMinutes = parseInt(timeEnd.substring(2,4));
        } else {
            timeEndHour = parseInt(timeEnd.substring(0,2));
            timeEndMinutes = parseInt(timeEnd.substring(3,5));
        }

        allTime = allTime + timeEndHour - timeStartHour + ((timeEndMinutes - timeStartMinutes) / 60);
        return (allTime);
    });

    return (
        <div className="statistics-container">
            <h2>Interesting facts</h2>
            <ul className="statistics-list">
                <li>Last time in Tatra Mountains: {amountOfDays} days ago</li>
                <li>Times in the Tatra Mountains: {entries.length}</li>
                <li>Total time spent in the mountains: {Math.floor(allTime)} hours</li>
                <li>Average duration of the trip: {Math.round(allTime / entries.length)} hours</li>
            </ul>
        </div>
    );
}
