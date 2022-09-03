import "./App.css";
import { Home, Navbar, Login, Signup, Book } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/book/:id" element={<Book />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
