import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';
import { CoursePart } from "./types"


const App: React.FC = () => {
  const courseName = "Half Stack application development";
  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is an awesome course part",
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3,
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev",
    },
    {
      name: "This is my own course part interface",
      description: "this is its description",
      exerciseCount: 13,
    }
  ];

  return (
    <div>
      <Header name={courseName} />
      <Content allParts={courseParts} />
      <Total allParts={courseParts} />
    </div>
  );
};

export default App;
