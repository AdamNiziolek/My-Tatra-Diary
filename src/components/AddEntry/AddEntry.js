import React from 'react';
import Header from '../Header/Header';
import AddEntryForm from './Form/AddEntryForm';
import Footer from '../Footer/Footer';

function AddEntry() {
  return (
    <div className="App">
      <Header />
      <AddEntryForm />
      <Footer />
    </div>
  );
}

export default AddEntry;
