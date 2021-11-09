import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/Home";
import Compose from "./pages/compose/Compose";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/compose" element={<Compose />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
