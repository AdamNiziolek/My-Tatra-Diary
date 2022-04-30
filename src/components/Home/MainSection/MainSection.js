import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import Entry from './Entry/Entry';
import { db } from '../../../utils/firebase';
import { useAuth } from '../../../contexts/AuthContext';

export default function MainSection() {
  const [entries, setEntries] = useState([]);
  const [deletion, setDeletion] = useState(false);
  const { currentUser } = useAuth();

  useEffect(() => {
    setEntries('');
    async function getDocuments() {
      const querySnapshot = await getDocs(collection(db, currentUser.email));
      querySnapshot.forEach((doc) => {
        const entry = doc.data();
        entry.id = doc.id;
        setEntries((prevState) => [...prevState, entry]);
      });
    }
    getDocuments();
  }, [deletion, currentUser]);

  return (
    <section className="main-section">
      {entries.length ? (
        entries.map((entry, index) => (
            <Entry
              entry={entry}
              setDeletion={setDeletion}
              deletion={deletion}
              key={index}
            />
        ))
      ) : (
        <div className="noEntry-section">
          <Link to="/add" className="noEntry-section__link">
            Welcome, dear Tatra hiker! <br />
            Add your first entry!
          </Link>
        </div>
      )}
    </section>
  );
}
