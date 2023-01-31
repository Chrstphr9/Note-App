import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";
import useCreateDate from "../components/useCreateDate";

const EditNote = ({ notes, setNotes }) => {
  const { id } = useParams();
  const note = notes.find((item) => item.id == id);
  // console.log(note);
  const [title, setTitle] = useState(note.title)
  const [details, setDetails] = useState(note.details)
  const date = useCreateDate();

  const handleForm = (e) => {
    e.preventDefault();

    if (title && details) {
      const newNote = {...note, title, details
    }
    const newNotes =notes.maps(item => {
      if(item.id ==id) {
        item = newNote;
      }
      return item;
    })

    setNotes(newNotes);
  }

  }
  

  return ( 
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn">
          {" "}
          <IoIosArrowBack />{" "}
        </Link>
        <button className="btn lg primary">Save</button>
        <button className="btn lg danger">
          <RiDeleteBin6Line />
        </button>
      </header>
      <form className="create-note__form">
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} autoFocus />
        <textarea rows="28" placeholder="Note Details...." value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
      </form>
    </section>
  );
};

export default EditNote;
