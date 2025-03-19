import { BrowserRouter, Routes, Route } from "react-router-dom";
import FacultyList from "./Faculty/FacultyList";
import AddFaculty from "./Faculty/AddFaculty";
import EditFaculty from "./Faculty/EditFaculty";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FacultyList />} />
        <Route path="/add" element={<AddFaculty />} />
        <Route path="/edit/:id" element={<EditFaculty />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
