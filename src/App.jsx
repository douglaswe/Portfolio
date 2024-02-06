import { useEffect } from "react";
import Navbar from "./assets/components/Navbar";
import About from "./assets/pages/About";
import Home from "./assets/pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  useEffect(()=>{
    window.history.scrollRestoration = "manual";
  },[]);

  return (
    <>
    <div className="flex flex-col min-h-[100vh]">
      <Navbar />
      <AnimatePresence mode="wait"> 
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </AnimatePresence>

    </div>
    </>
  );
}

export default App;
