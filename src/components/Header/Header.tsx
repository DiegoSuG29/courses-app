import React from "react";
import Logo from "./components/Logo/Logo.tsx";
import Button from "../../common/Button/Button.tsx";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <div className={styles.Header}>
            <Logo/>
            <h3>Courses App</h3>
            <Button buttonText="Logout" onClick={()=>{}}/>
        </div>
    );
}
