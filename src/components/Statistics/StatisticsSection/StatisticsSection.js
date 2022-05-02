import React from 'react';

const milisecondsInDay = 24 * 60 * 60 * 1000;
const milisecondsInHour = 60 * 60 * 1000;

export default function StatisticsSection({ entries }) {
  // Last time in Tatras
  const lastEntryDate = new Date(entries[entries.length - 1].date);
  const todayDate = new Date();
  const amountOfDays = Math.floor(
    (todayDate - lastEntryDate) / milisecondsInDay,
  );

  // All time in Tatras
  let allTime = 0;
  entries.forEach(({ timeStart, timeEnd }) => {
    const timeStartDate = new Date();
    timeStartDate.setTime(Date.parse(`Thu, 01 Jan 1970 ${timeStart}:00`));
    const timeEndDate = new Date();
    timeEndDate.setTime(Date.parse(`Thu, 01 Jan 1970 ${timeEnd}:00`));
    const difference =
      (timeEndDate.getTime() - timeStartDate.getTime()) / milisecondsInHour;
    allTime += difference;
    return allTime;
  });

  return (
    <div className="statistics-container">
      <h2>Interesting facts</h2>
      <ul className="statistics-list">
        <li>Last time in Tatra Mountains: {amountOfDays} days ago</li>
        <li>Times in the Tatra Mountains: {entries.length}</li>
        <li>Total time spent in the mountains: {Math.floor(allTime)} hours</li>
        <li>
          Average duration of the trip: {Math.round(allTime / entries.length)}
          {' '} hours
        </li>
      </ul>
    </div>
  );
}
