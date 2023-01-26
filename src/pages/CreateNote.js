import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io';

const CreateNote = () => {
  return (
    <section>
      <header className='create-note__header'>
          <Link to='/' className='btn'> <IoIosArrowBack/> </Link>
          <button className='btn lg primary'>Save</button>
      </header>
    </section>
  )
}

export default CreateNote