import React from 'react';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../../../utils/firebase';
import { useAuth } from '../../../../contexts/AuthContext';

export default function Entry({ record, setDeletion, deletion }) {
  const { id, date, timeStart, timeEnd, goal, entry, photo } = record;
  const { currentUser } = useAuth();

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      await deleteDoc(doc(db, currentUser.email, id));
      setDeletion(!deletion);
    } catch (error) {
      console.error('Error removing document: ', error);
    }
  };

  return (
    <div className="entry-container">
      <img className="entry-photo" src={photo} alt="Tatra Mountains" />
      <div className="entry-name">
        <div className="entry-delete" onClick={handleDelete}>
          <i className="far fa-trash-alt"></i>
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
