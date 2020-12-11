import React, { useState } from "react";

//import logo from './logo.svg';
import "./App.css";
import NavBar from "./components/NavBar";
import EmployeeTable from "./components/EmployeeTable";

import { EmployeeContext } from "./components/EmployeeContext";

function App() {
  const [employees, setEmployees] = useState([]);
  const [visibleEmployees, setVisibleEmployees] = useState([]);

  return (
    <div className="App" id="app">
      <EmployeeContext.Provider
        value={{
          employees,
          setEmployees,
          visibleEmployees,
          setVisibleEmployees,
        }}
      >
        <NavBar />
        <EmployeeTable />
      </EmployeeContext.Provider>
    </div>
  );
}

export default App;
