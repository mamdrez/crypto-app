import React from 'react';
import styles from './Loader.module.css'
import spinner from "../gif/spinner1.gif"

const Loader = () => {
    return (
        <div className={styles.container}>
            <h3>Loading...</h3>
            <img src={spinner} alt="Loading"/>
        </div>
    );
};



export default Loader;