import React from 'react'

const Notes = () => {
  return (
    <section>
      <header className='notes__header'>
          <h2> My Notes </h2>
          <input type="text" autoFocus placeholder='Keywords....' />
          <button></button>
      </header>
    </section>
  )
}

export default Notes