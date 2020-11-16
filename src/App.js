import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { EmployeeContext } from "./components/EmployeeContext";

function App() {
  const [employees, setEmployees] = usetState([])

  return (
    <div className="App">
      <EmployeeContext.Provider></EmployeeContext.Provider>
    </div>
  );
}

export default App;
