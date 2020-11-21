import {useEffect, useContext} from 'react';
import {EmployeeContext} from "../components/EmployeeContext"
import axios from 'axios'

export function useGet(url) {
    const {employees, setEmployees, visibleEmployees, setVisibleEMployees}  = use(EmployeeContext)
}