import React from 'react';
import styles from "./navigation.module.css"; 
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className={styles.navigation}>
            <h1>Simple Calculator</h1>
            <div className={styles.navigationButtonContainer}>
                <Link to="/">
                <button className={styles.navigationButton}>
                    HOME
                </button>
                </Link>
                <Link to="/contact"> 
                <button className={styles.navigationButton}>
                    CONTACT
                </button>
                </Link>
            </div>
        </div>
    );
}

export default Navigation;
