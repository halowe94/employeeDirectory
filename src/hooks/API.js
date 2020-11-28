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

    }, [])
    //end useEffect function

    //begin sortFunc
    function sortFunc(sort) {
        switch(sort) {
            case "name": sortByName()
            break
            case "age": sortByAge()
            break
            default: console.log("Does not match name or age")
        }
    }
    //end sortFunc

    //sort by first name

    //sort by age
}
//end useGet function