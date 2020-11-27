import {useEffect, useContext} from 'react';
import {EmployeeContext} from "../components/EmployeeContext"
import axios from 'axios'

//useGet function
export function useGet(url) {
    const {employees, setEmployees, visibleEmployees, setVisibleEMployees}  = use(EmployeeContext)

    //useEffect function
    useEffect(() => {
        async function getEmployees() {
            //try catch for getEmployees
            try {
                //create response variable for axios call
                const response = await axios.get(url)
                setEmployees(response.data.results)
                setVisibleEMployees(response.data.results)

            } catch (error) {
                console.log("error with API:", error)
            }
        }
        //call getEmployees function
        getEmployees()

    })
    //end useEffect function
}
//end useGet function