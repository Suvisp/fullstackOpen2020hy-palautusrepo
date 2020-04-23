import React from 'react'
import ReactDOM from 'react-dom'

// const Header = () => {
//   const course = 'Half Stack application development'
//   return (
//     <div>
//       <p>{course}</p>
//     </div>
//   )
// }

// const Content = () => {
//   const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]
//   return (
//     <div>
//       <p>
//         {parts[0].name} {parts[0].exercises}
//       </p>
//       <p>
//         {parts[1].name} {parts[1].exercises}
//       </p>
//       <p>
//         {parts[2].name} {parts[2].exercises}
//       </p>
//     </div>
//   )
// }

// const Total = () => {
//   const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]

//   return (
//     <div>
//       <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <Content />
//       <Total />
//     </div>
//   )
// }

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <p>{course.name}</p>
      <p>
        {course.parts[0].name} {course.parts[0].exercises}
      </p>
      <p>
        {course.parts[1].name} {course.parts[1].exercises}
      </p>
      <p>
        {course.parts[2].name} {course.parts[2].exercises}
      </p>
      <p>Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root')) 