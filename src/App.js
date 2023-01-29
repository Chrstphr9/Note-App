import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote";
import Notes from "./pages/Notes";
// import dummyNotes from './dummy_notes';

import { useState } from "react";

function App() {
      const [notes, setNotes] = useState(dummyNotes)

  return (
    <main id="app">
      <Router>
        <Routes>
          <Route path="/" element={<Notes notes={notes} />} />
          <Route path="/create-note" element={<CreateNote setNotes={setNotes}/>} />
          <Route path="/edit-note/:id" element={<EditNote />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
