import React from "react";

import styles from "./Button.module.css";

interface buttonProps {
    buttonText: string,
    onClickFunction?: any,
    type?: string;
}

export default function Button(props: buttonProps) {
    return <button className={styles.Button} onClick={props.onClickFunction}>{props.buttonText.toUpperCase()}</button>
}
