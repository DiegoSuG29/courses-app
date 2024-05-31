import React from "react";

import Button from "../../common/Button/Button";

import styles from './EmptyCourseList.module.css';

export default function EmptyCourseList() {
    return <div className={styles.EmptyList}>
        <div className={styles.Subtitle}>Your List is Empty</div>
        <div className={styles.Text}>Please use 'Add New Course' button to add your first course</div>
        <Button buttonText="Add new course" />
    </div>
}