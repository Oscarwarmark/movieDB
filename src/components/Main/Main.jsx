import MovieList from "../MovieList/MovieList";
import MovieDetails from "../MovieDetails/MovieDetails";
import About from "../About/About";
import Contact from "../Contact/Contact";
import { Route, Routes } from "react-router-dom";
import "./Main.css";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path=":id" element={<MovieDetails />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </main>
  );
}

export default Main;
