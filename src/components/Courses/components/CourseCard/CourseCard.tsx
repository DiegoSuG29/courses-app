import React from "react";

import styles from "./CourseCard.module.css";
import Button from "../../../../common/Button/Button";

interface cardProps {
    title: string,
    description: string,
    duration: string,
    authors: Array<String>,
    date: string,
};

function formatAuthors(authorList: Array<String>): String {
    let str = "";
    for (let i = 0; i < authorList.length - 1; i++) {
        str += authorList[i] + ", ";
    }
    str += authorList[authorList.length - 1];

    return str;
};

export default function CourseCard(props: cardProps) {
    return (
        <div className={styles.CourseCard}>
            <div className={styles.CourseCardTitle}>{props.title}</div>
            <div className={styles.CourseCardInfo}>
                <div>{props.description}</div>
                <div>
                    <div className={styles.InfoColumn}>
                        <text><span className={styles.boldedText}>Author</span>: {formatAuthors(props.authors)}</text>
                        <text><span className={styles.boldedText}>Duration</span>: {props.duration}</text>
                        <text><span className={styles.boldedText}>Created</span>: {props.date}</text>
                        <br />
                        <Button buttonText={"Show course"} onClickFunction={() => { }}></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}