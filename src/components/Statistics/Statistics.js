import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import Header from '../Header/Header';
import StatisticsSection from './StatisticsSection/StatisticsSection';
import Footer from '../Footer/Footer';
import { db } from '../../utils/firebase';
import { useAuth } from '../../contexts/AuthContext';

export default function Statistics() {
  const [entries, setEntries] = useState([]);
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
  }, [currentUser]);

  return (
    <div className="App">
      <Header />
      <section className="main-section">
        {entries.length ? (
          <StatisticsSection entries={entries} />
        ) : (
          <div className="noEntry-section">
            <Link to="/add" className="noEntry-section__link">
              Welcome, dear Tatra hiker! <br />
              Add your first entry!
            </Link>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}
