import React from 'react';
import { EmployeeContext } from './EmployeeContext';
//import './SearchBar.css'

function Search() {
    const [search, setSearch] = useState("");
    const [employees, setVisibleEmployees] = useContext(EmployeeContext);

    function updateSearch({target}) {
        const searchTerm = target.value

        setSearch(searchTerm)

        const filterResult = employees.filter(function(employee) {
            return employee.name.first.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ? true : false
        })

        setVisibleEmployees([...filterResult])
    }

    return(
        <input type='text' onChange= {updateSearch} value={search}></input>
    )

}

export default Search;


