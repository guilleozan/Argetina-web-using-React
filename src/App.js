import "./styles/App.css";
import React from "react";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import NavBar from "./Layout/NavBar";

import 'bootstrap/dist/css/bootstrap.min.css'; //Boostrap
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
    <div className="App">
      
      <Header />
   
      <NavBar/>
    
      <Footer />
  
 
    </div>
  );
}

export default App;
