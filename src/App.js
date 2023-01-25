import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote";
import Notes from "./pages/Notes";


function App() {
  return (
    <main id="app">
      <Router>
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/create-note" element={<CreateNote />} />
        <Route path="/edit-note/:id" element={<EditNote />} />
      </Routes>
    </Router>
    </main>
  );
}

export default App;
