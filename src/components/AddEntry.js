import React from "react";
import Header from './Header';
import AddEntryForm from './AddEntryForm';
import Footer from './Footer';

function AddEntry() {
    return (
        <div className="App">
            <Header/>
            <AddEntryForm/>
            <Footer/>
        </div>
    );
}

export default AddEntry;