import React from 'react';
import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.listContainer}>
                <ul className={styles.list}>
                    <li><Link to="/market">Market</Link></li>
                    <li><Link to="/">Home Page</Link></li>
                    <li><Link to="/">About Us</Link></li>
                </ul>
            </div>
            <div className={styles.logo}>
                <h1>ZEPCo</h1>
            </div>  
        </header>
    );
};

export default Navbar;