import React from 'react'
import dummyNotes from '../dummy_notes'
import {
  CiSearch
} from 'react-icons/ci'

const Notes = () => {
  return (
    <section>
      <header className='notes__header'>
          <h2> My Notes </h2>
          {/* <input type="text" autoFocus placeholder='Keywords....' /> */}
          <button className='btn'> <CiSearch /> </button>
      </header>
      <div className='note__container'>
        {
            dummyNotes.map(note => <NoteItem key={note.id } />)
        }
      </div>
    </section>
  )
}

export default Notes