import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import Create from "./components/AdminPanel/Create";
import {UserProvider} from "./components/context/UserProvider";
import Amazing from "./components/Amazing/Amazing";
import Navbar from "./components/Header/Navbar/Navbar";
import HamberMenuShow from "./components/Header/Navbar/HamberMenuShow";
import Footer from "./components/footer/Footer";
import "./components/loader.css"
import { useState } from "react";

function App() {
  
  return (
    <BrowserRouter>
      <UserProvider> 
        <Navbar />
        <HamberMenuShow />
        <Routes>
          <Route path="/" element={<Body />} />  
          <Route path="/admin-panel" element={<AdminPanel />} />
          <Route path="/create"  element={<Create />} />
          <Route path="/amazing"  element={<Amazing />} />
        </Routes>
        <Footer />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
