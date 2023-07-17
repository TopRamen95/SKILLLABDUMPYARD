import "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import navbar from "./components/navbar";

function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
    <Route path= "/" element={<Home/>} />
    <Route path= "/about" element={<About/>} />
    <Route path= "/contact" element={<Contact/>} />

    </Routes>
    </BrowserRouter>
    </>

  );
};