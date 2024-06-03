import React from "react";

import styles from './SearchBar.module.css';

import Button from "../../../../common/Button/Button";

export default function SearchBar() {
    return (<div className={styles.Container}>
        <div className={styles.SearchBar}>Place your text here.</div>
        <Button buttonText="Search"/>
    </div>
    );
}