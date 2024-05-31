import React from 'react';

import Header from './components/Header/Header';
import CourseCard from './components/Courses/components/CourseCard/CourseCard';
import EmptyCourseList from './components/EmptyCourseList/EmptyCourseList';

import './constants';
import { mockedCoursesList } from './constants';

import formatCreationDate from './helpers/formatCreationDate';
import getCourseDuration from './helpers/getCourseDuration';
import getAuthors from './helpers/getAuthors';

interface mockedCourse {
  title: string,
  description: string,
  authors: Array<String>,
  creationDate: string,
  duration: number,
};


function App() {
  return (
    <body style={{ height: "100vh", margin: "0" }}>
      <div style={{ backgroundColor: "#F7F7F7", flex:1}}>
        <Header />
        {mockedCoursesList.length === 0 ?
          (<EmptyCourseList />) :
          (mockedCoursesList.map((element: mockedCourse) => {
            return <CourseCard title={element.title} description={element.description} authors={getAuthors(element.authors)} date={formatCreationDate(element.creationDate)} duration={getCourseDuration(element.duration)} />;
          }))
        }
        <br/>
      </div>
    </body>
  );
}

export default App;