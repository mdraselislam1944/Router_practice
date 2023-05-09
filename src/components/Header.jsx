import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/'>home</Link><br></br>
            <Link to='/login'>Login</Link><br></br>
            <Link to='/addCoffee'> click AddCoffee</Link>
            <h1>This is header</h1>
        </div>
    );
};

export default Header;