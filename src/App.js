import React, {useState} from 'react';

import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import EmployeeTable from "./components/EmployeeTable";

import { EmployeeContext } from "./components/EmployeeContext";

function App() {
  const [employees, setEmployees] = usetState([])
  const [visibleEmployees, setVisibleEmployees] = useState([])

  return (
    <div className="App">
      <EmployeeContext.Provider value={{employees, setEmployees, visibleEmployees, setVisibleEmployees}}></EmployeeContext.Provider>
    </div>
  );
}

export default App;
