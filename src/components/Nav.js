import React,{Fragment} from 'react';
import {Link} from 'react-router-dom'
import './Nav.css'

const Nav = ()=>{
    const name = 'John Doe'
    return (
<Fragment>
    <div class="topnav">
        <nav>
            <Link to="/">Home</Link>
            <Link to={`/about/${name}`}>About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    </div>
</Fragment>
    );
}

export default Nav;