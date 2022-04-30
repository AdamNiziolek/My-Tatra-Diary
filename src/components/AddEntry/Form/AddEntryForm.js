import React, { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { storage, db } from '../../../utils/firebase';
import { useAuth } from '../../../contexts/AuthContext';

export default function AddEntryForm() {
  const [form, setForm] = useState({
    date: '',
    timeStart: '',
    timeEnd: '',
    goal: '',
    entry: '',
  });
  const [entryError, setError] = useState(false);
  const [entrySend, setEntrySend] = useState(false);
  const [fileURL, setFileURL] = React.useState(null);
  const { currentUser } = useAuth();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onChange = async (event) => {
    const file = event.target.files[0];
    const fileRef = ref(storage, `images/${file.name}`);
    uploadBytes(fileRef, file).then(() => {
      getDownloadURL(ref(storage, `images/${file.name}`))
        .then((url) => {
          setFileURL(url);
        })
        .catch((error) => console.log(error));
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { date, timeEnd, timeStart, goal, entry } = form;
    if (
      date.length > 0 &&
      timeStart.length > 0 &&
      timeEnd.length > 0 &&
      goal.length > 0 &&
      entry.length > 0 &&
      entry.length < 251 &&
      goal.length < 51
    ) {
      try {
        await addDoc(collection(db, currentUser.email), {
          date,
          timeEnd,
          timeStart,
          goal,
          entry,
          photo: fileURL,
        });
        setError(false);
        setEntrySend(true);
        setForm({ date: '', timeStart: '', timeEnd: '', goal: '', entry: '' });
      } catch (error) {
        console.error('Error adding document: ', error);
      }
    } else {
      setError(true);
      setEntrySend(false);
    }
  };

  return (
    <section className="main-section">
      <form className="add-entry-form" onSubmit={handleSubmit}>
        <h2>Write down your memories</h2>
        <div className="date form-div">
          <label>
            Date
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="hour form-div">
          <label>
            Start
            <input
              type="time"
              name="timeStart"
              value={form.timeStart}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="hour form-div">
          <label>
            End
            <input
              type="time"
              name="timeEnd"
              value={form.timeEnd}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="goal form-div">
          <label>
            Goal of trip
            <input
              className="goal-input"
              type="text"
              name="goal"
              placeholder="Max 50 characters"
              value={form.goal}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="entry-text form-div">
          <label>
            Memories
            <textarea
              name="entry"
              placeholder="Max 250 characters"
              value={form.entry}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-photo form-div">
          <label>
            Photo
            <input
              className="form-photo-input"
              type="file"
              onChange={onChange}
            />
          </label>
        </div>
        <div className="btn" onClick={handleSubmit}>
          Save entry{' '}
        </div>
        {entryError === true && (
          <div className="entry-statement">
            The fields were filled in incorrectly.
          </div>
        )}
        {entrySend === true && (
          <div className="entry-statement">
            The entry has been added to the diary.
          </div>
        )}
      </form>
    </section>
  );
}
