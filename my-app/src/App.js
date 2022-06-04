import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListEmployeeComponent  from "./components/jsx/ListEmployeeComponent";
import HeaderComponent from "./components/jsx/HeaderComponent";
import {BrowserRouter as Router} from "react-router-dom";
import {Routes, Route} from "react-router";
import AddEmployeeComponent from './components/jsx/AddEmployeeComponent';

function App() {
  return (
    <div>
            <Router>
                <div className="container">
                    <HeaderComponent/>
                    <div className="container">
                        <Routes>
                            <Route path="/" element={<ListEmployeeComponent/>}/>
                            <Route path="/employee" element={<ListEmployeeComponent/>}/>
                            <Route path="/add" element={<AddEmployeeComponent/>}/>
                        </Routes>
                    </div>
                </div>
            </Router>
        </div>
  );
}

export default App;
