/* eslint-disable react/jsx-key */
import React from "react"

interface Course {
  name: string;
  exerciseCount: number;
}

interface CoursesProps {
  allCourses: Course[];
}

const Content = (props: CoursesProps) => {
  return (
    <div>
      {props.allCourses.map((course) => (
        <p>
          {course.name} {course.exerciseCount}
        </p>
      ))}
    </div>
  )
}

export default Content