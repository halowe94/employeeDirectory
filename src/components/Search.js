import React from 'react';
import { EmployeeContext } from './EmployeeContext';
//import './SearchBar.css'

function Search() {
    const [search, setSearch] = useState("");
    const [employees, setVisibleEmployees] = useContext(EmployeeContext);

    function updateSearch({}) {

    }

}

export default Search;


