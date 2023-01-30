import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { RiDeleteBin6Line } from 'react-icons/ri';
import { IoIosArrowBack } from 'react-icons/io';

const EditNote = ({notes, setNotes}) => {
  const {id} = useParams();
  return (
    <section>
    <header className='create-note__header'>
        <Link to='/' className='btn'> <IoIosArrowBack/> </Link>
        <button className='btn lg primary'>Save</button>
        <button className='btn lg danger'><RiDeleteBin6Line /></button>
    </header>
    <form className='create-note__form'>
      <input type='text' placeholder='Title' autoFocus />
      <textarea rows='28' placeholder='Note Details....'></textarea>
    </form>
  </section>
  )
}

export default EditNote