import React, { useState, useContext } from "react";
import { EmployeeContext } from "./EmployeeContext";
import Button from "./Button";
import { useGet } from "../hooks/API";
import "./EmployeeTable.css";

//begin employee table function
function EmployeeTable() {
  const [url] = useState("https://randomuser.me/api/?results=10");
  const { sortFunc } = useGet(url);
  const {
    visibleEmployees,
    setVisibleEmployees,
    setEmployees,
    employees,
  } = useContext(EmployeeContext);

  const handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.value === "") {
      setVisibleEmployees(employees);
    } else {
      const filteredList = visibleEmployees.filter((person) => {
        console.log(person.name.first);
        return person.name.first.includes(e.target.value);
      });
      console.log(filteredList);
      setVisibleEmployees(filteredList);
    }
  };

  return (
    <>
      <input name="searchInput" onChange={handleChange} />
      <table className="mx-auto" id="table">
        <thead id="thead">
          <tr>
            <td onClick={() => sortFunc("name")}>
              <p>CLICK TO SORT</p>
              <Button>First Name</Button>
            </td>
            <td>Last Name</td>
            <td>Gender</td>
            <td>E-mail</td>
            <td onClick={() => sortFunc("age")}>
              <p>CLICK TO SORT</p>
              <Button>Age</Button>
            </td>
          </tr>
        </thead>
        <tbody>
          {visibleEmployees.map((employee) => {
            return (
              <tr key={employee.login.uuid}>
                <td>{employee.name.first}</td>
                <td>{employee.name.last}</td>
                <td>{employee.gender}</td>
                <td>{employee.email}</td>
                <td>{employee.dob.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
//end employee table function

export default EmployeeTable;
