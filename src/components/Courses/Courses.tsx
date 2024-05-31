import React from "react";

import CourseCard from './components/CourseCard/CourseCard';
import EmptyCourseList from '../EmptyCourseList/EmptyCourseList';

import { mockedCoursesList } from '../../constants';

import formatCreationDate from '../../helpers/formatCreationDate';
import getCourseDuration from '../../helpers/getCourseDuration';
import getAuthors from '../../helpers/getAuthors';

interface mockedCourse {
    title: string,
    description: string,
    authors: Array<String>,
    creationDate: string,
    duration: number,
};


export default function Courses() {
    return ({
        mockedCoursesList.length === 0 ?
            (<EmptyCourseList />) :
            (mockedCoursesList.map((element: mockedCourse) => {
                return <CourseCard title={element.title} description={element.description} authors={getAuthors(element.authors)} date={formatCreationDate(element.creationDate)} duration={getCourseDuration(element.duration)} />;
            }))
    })
}