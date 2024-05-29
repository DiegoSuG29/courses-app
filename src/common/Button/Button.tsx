import React from "react";
import styles from "./Button.module.css";

export default function Button(props: any) {
    return <button className={styles.Button} onClick={props.onClickFunction}>{props.buttonText.toUpperCase()}</button>
}
