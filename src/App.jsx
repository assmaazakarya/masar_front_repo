import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.css";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import Singup from "./components/Singup/Singup";
import Notfound from "./components/Notfound/Notfound";
import Courses from "./components/Courses/Courses";
import Lessons from "./components/Lessons/Lessons";
import Contact from "./components/Contact/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CourseDetails from "./Pages/CourseDetails";
import Layout from "./components/Layouts/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/lesson" element={<Lessons />} />
            <Route path="/singup" element={<Singup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/CourseDetails" element={<CourseDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
