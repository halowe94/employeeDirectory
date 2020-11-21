import React, {useState, useContext} from 'react';
import { EmployeeContext } from './EmployeeContext'

function EmployeeTable() {

    const [url] = useState()
    const { sortFunc } = useGet(url)
    const { visibleEmployees } = useContext(EmployeeContext)
    return (
        <table>
            <thead>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </thead>
        </table>

    )
}

