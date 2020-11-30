import React, {useState, useContext} from 'react';
import { EmployeeContext } from './EmployeeContext'
import Button from './Button'
import {useGet} from '../hooks/API';

//begin employee table function
function EmployeeTable() {

    const [url] = useState("https://randomuser.me/api/?results=10")
    const { sortFunc } = useGet(url)
    const { visibleEmployees } = useContext(EmployeeContext)

    return (
        <table>
            <thead>
                <tr>
                    <td onClick={() => sortFunc('name')}><Button>First Name</Button></td>
                    <td>Last Name</td>
                    <td>Gender</td>
                    <td>E-mail</td>
                    <td onClick={() => sortFunc('age')}><Button>Age</Button></td>
                </tr>
            </thead>
            <tbody>
                {visibleEmployees.map(employee => {
                    return (
                        <tr key={employee.login.uuid}>
                            <td>{employee.name.first}</td>
                            <td>{employee.name.last}</td>
                            <td>{employee.gender}</td>
                            <td>{employee.email}</td>
                            <td>{employee.dob.age}</td>
                        </tr>
                    )
                })}
                
            </tbody>
        </table>

    )
};
//end employee table function

export default EmployeeTable; 
