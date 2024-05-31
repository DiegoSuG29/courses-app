import React from "react";
import {Logo} from "./components/Logo/Logo";
import Button from "../../common/Button/Button";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <div className={styles.Header}>
            <Logo/>
            <h2>Courses App</h2>
            <Button buttonText="Logout" onClick={()=>{}}/>
        </div>
    );
}
