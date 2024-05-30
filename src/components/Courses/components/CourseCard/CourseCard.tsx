import React from "react";

import styles from "./CourseCard.module.css"
import Button from "../../../../common/Button/Button.tsx"


export default function CourseCard(props: any) {
    return (
        <div className={styles.CourseCard}>
            <div className={styles.CourseCardTitle}>{props.title}</div>
            <div className={styles.CourseCardInfo}>
                <div>{props.description}</div>
                <div>
                    <div className={styles.InfoColumn}>
                        <text><span className={styles.boldedText}>Author</span>: {props.authors}</text>
                        <text><span className={styles.boldedText}>Duration</span>: 2h 30</text>
                        <text><span className={styles.boldedText}>Created</span>: 203.10.33</text>
                        <br />
                        <Button buttonText={"Show course"}></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}