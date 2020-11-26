import React, {useState, useContext} from 'react';
import { EmployeeContext } from './EmployeeContext'
import Button from './Button'

function EmployeeTable() {

    const [url] = useState()
    const { sortFunc } = useGet(url)
    const { visibleEmployees } = useContext(EmployeeContext)

    return (
        <table>
            <thead>
                <tr>
                    <td>Last Name</td>
                    <td>UID</td>
                    <td>Gender</td>
                    <td>E-mail</td>
                </tr>
            </thead>
            <tbody>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tbody>
        </table>

    )
};

export default EmployeeTable; 
