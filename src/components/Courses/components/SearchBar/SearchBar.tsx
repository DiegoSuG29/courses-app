import React from 'react';

import Button from "../../../../common/Button/Button";
import Input from "../../../../common/Input/Input";

import styles from './SearchBar.module.css';

interface SearchBarProps {
    searchQuery: string,
    onChange?: any,
    onClick: () => void,
}

export default function SearchBar(props: SearchBarProps) {

    return (<div className={styles.Container}>
        <Input name="searchbar" type="search" inputText="Enter you search here." className={styles.SearchBar} onChange={props.onChange} value={props.searchQuery} />
        <Button buttonText="Search" onClickFunction={props.onClick} />
    </div>
    );
}