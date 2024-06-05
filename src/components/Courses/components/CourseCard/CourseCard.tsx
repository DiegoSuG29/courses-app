import React from "react";

import Button from "../../../../common/Button/Button";

import styles from "./CourseCard.module.css";

interface cardProps {
    title: string,
    description: string,
    duration: string,
    authors: Array<String>,
    date: string,
    routingFunction: Function,
};

export function formatAuthors(authorList: Array<String>): String {
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
                        <span><span className={styles.boldedText}>Author</span>: {formatAuthors(props.authors)}</span>
                        <span><span className={styles.boldedText}>Duration</span>: {props.duration}</span>
                        <span><span className={styles.boldedText}>Created</span>: {props.date}</span>
                        <br />
                        <Button buttonText={"Show course"} onClickFunction={props.routingFunction}></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}