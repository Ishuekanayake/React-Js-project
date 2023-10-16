import React from "react";
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Content from "./Components/Content";
import Header from "./Components/Header";


function App() {
  return (
    <div className="app-1">
      <Header/>
      <Content/>
      <Router>
        <Routes>
                 
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
