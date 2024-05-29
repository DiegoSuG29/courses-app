import React from 'react';
import Header from './components/Header/Header.tsx';
import CourseCard from './components/Courses/components/CourseCard/CourseCard.tsx';

function App() {
  return (
    <body style={{backgroundColor: "#F7F7F7"}}>
      <Header />
      <CourseCard />
    </body>
  );
}

export default App;