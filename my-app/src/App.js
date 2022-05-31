import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home"; 
import { AddUser } from "./components/AddUser"; 
import { EditUser } from './components/EditUser';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{maxWidth: "30rem", margin: "4rem auto"}}>
      <Router>
        <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/" element={<AddUser />}></Route>
        <Route exact path="/" element={<EditUser />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
