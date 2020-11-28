import React from 'react';
//import Search from './SearchBar'

import React from 'react';

function NavBar() {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
       <h2>Employee Directory</h2>
       <div>
           <h3>Employee Search:</h3>
           {/* Search bar here */}
       </div>
    </nav>
    );
};

export default NavBar;