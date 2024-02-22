import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";

import './App.css';

function App() {
  return (
    <div >
     <Header/>
     <Outlet/>
     <Footer/>
    </div>
  );
}

export default App;
