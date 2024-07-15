import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/create-account">Create Account</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/forum">Forum</Link></li>
                    <li><Link to="/delete-account">Delete Account</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
