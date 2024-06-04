import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import styles from './CourseInfo.module.css';

import Button from "../../common/Button/Button";
import { formatAuthors } from "../Courses/components/CourseCard/CourseCard";


export default function CourseInfo() {
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state;
    return (<div>
        <div className={styles.CourseInfoContainer}>
            <div className={styles.CourseInfoTitle}>{data.title}</div>
            <div className={styles.CourseCard}>
                <div className={styles.CourseCardInfo}>
                    <div className={styles.Column}>
                        <span className={styles.boldedText}>Description</span>
                        <div>{data.description}</div>
                    </div>
                    <div className={styles.Separator} />
                    <div className={styles.Column}>
                        <span><span className={styles.boldedText}>ID</span>: {data.id}</span>
                        <span><span className={styles.boldedText}>Duration</span>: {data.duration}</span>
                        <span><span className={styles.boldedText}>Created</span>: {data.date}</span>
                        <span><span className={styles.boldedText}>Authors</span>: {formatAuthors(data.authors)}</span>
                    </div>
                </div>
            </div>
            <Button buttonText="Back" onClickFunction={() => navigate("/")} />
        </div>
    </div>);
}