import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import About from "./pages/About";
import GlobalPresence from "./pages/GlobalPresence"
import {Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/global-presence" element={<GlobalPresence/>}/>
      </Routes>

      
    </div>
  )
}

export default App;
