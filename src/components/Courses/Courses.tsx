import React from "react";
import { useNavigate } from "react-router-dom";

import CourseCard from './components/CourseCard/CourseCard';
import EmptyCourseList from '../EmptyCourseList/EmptyCourseList';
import SearchBar from "./components/SearchBar/SearchBar";
import Button from "../../common/Button/Button";

import styles from './Courses.module.css';

import formatCreationDate from '../../helpers/formatCreationDate';
import getCourseDuration from '../../helpers/getCourseDuration';
import getAuthors from '../../helpers/getAuthors';

export interface mockedCourse {
    id?: string,
    title: string,
    description: string,
    authors: Array<String>,
    creationDate: string,
    duration: number,
};

interface cardProps {
    id?: string,
    title: string,
    description: string,
    duration: string,
    authors: Array<String>,
    date: string,
}


interface coursesProps {
    mockedCoursesList: mockedCourse[];
}

export default function Courses(props: coursesProps) {
    const coursesList = props.mockedCoursesList;
    const navigate = useNavigate();

    const routingFunction = (course: mockedCourse) => {
        let courseProps: cardProps = {
            id: course.id,
            title: course.title,
            description: course.description,
            duration: getCourseDuration(course.duration),
            authors: getAuthors(course.authors),
            date: formatCreationDate(course.creationDate)
        };
        navigate(`/courseInfo/${course.title}`, { state: courseProps });
    }

    return (<div className={styles.CoursesContainer}>
        {coursesList.length > 0 && <div className={styles.TopBar}>
            <SearchBar />
            <Button buttonText="Add new course" />
        </div>}
        {coursesList.length === 0 ?
            (<EmptyCourseList />) :
            (coursesList.map((element: mockedCourse) => {
                return <CourseCard key={element.id} title={element.title} description={element.description} authors={getAuthors(element.authors)} date={formatCreationDate(element.creationDate)} duration={getCourseDuration(element.duration)} routingFunction={() => routingFunction(element)} />;
            }))
        }
    </div>
    );
}