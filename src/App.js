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
  
  /** loader the Body(Home page) */
  const [GetAmazingOffer, setGetAmazingOffer] = useState(true)
  // const [todayPost, setTodayPost] = useState(false)
  // const [rangePrice, setRangePrice] = useState(false)
  
  return (
    <BrowserRouter>
      <UserProvider setGetAmazingOffer={setGetAmazingOffer}>
        {GetAmazingOffer &&
        <div className="w-full h-full sticky top-0 z-50">
          <div className='w-[100%] h-[100vh] absolute z-50' style={{background: "linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.4) 100%, rgba(0,0,0,0.4) 100%)"}}>
            <div className='w-fit h-fit p-7 rounded-xl shadow-xl bg-white absolute left-0 right-0 top-0 bottom-0 m-auto'>
              <div className="loader"/>
            </div>
          </div>
        </div>
}
 
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
