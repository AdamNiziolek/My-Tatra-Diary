import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../../../utils/firebase';
import Entry from './Entry/Entry';
import { useAuth } from '../../../contexts/AuthContext';

export default function MainSection() {
  const [entries, setEntries] = useState([]);
  const [deletion, setDeletion] = useState(false);
  const { currentUser } = useAuth();

  useEffect(() => {
    setEntries('');
    (async function getEntries() {
      try {
        const q = query(collection(db, currentUser.email), orderBy('date', 'asc'));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const entry = doc.data();
          entry.id = doc.id;
          setEntries((prevState) => [...prevState, entry]);
        });
      } catch (error) {
        console.log(error);
      }
    }());
  }, [deletion, currentUser]);

  return (
    <section className="main-section">
      {entries.length ? (
        entries.map((record, index) => (
          <Entry
            record={record}
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
