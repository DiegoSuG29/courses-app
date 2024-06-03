import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { mockedCoursesList } from './constants';

import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CourseInfo from './components/CourseInfo/CourseInfo';


function App() {
  return (
    <div style={{ height: "100vh", margin: "0" }}>
      <Router>
        <div style={{ backgroundColor: "#F7F7F7", flex: 1 }}>
          <Header />
          <Routes>
            <Route path="/" element={<Courses mockedCoursesList={mockedCoursesList}/>}></Route>
            <Route path="/courseInfo/:course" element={<CourseInfo />}></Route>
          </Routes>
          <br />
        </div>
      </Router>
    </div>
  );
}

export default App;