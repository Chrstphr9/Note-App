import React from "react";
import dummyNotes from "../dummy_notes";
import { CiSearch } from "react-icons/ci";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import NoteItem from "../components/NoteItem";

const Notes = ({notes}) => {
  console.log(notes)
  return (
    <section>
      <header className="notes__header">
        <h2> My Notes </h2>
        {/* <input type="text" autoFocus placeholder='Keywords....' /> */}
        <button className="btn">
          {" "}
          <CiSearch />{" "}
        </button>
      </header>
      <div className="note__container">
        {notes.map((note) => (
          <NoteItem key={note.id} note= {note} />
        ))}
      </div>
      <Link to='/create-note' className="btn add__btn">
        {" "}
        <BsPlusLg />{" "}
      </Link>
    </section>
  );
};

export default Notes;
