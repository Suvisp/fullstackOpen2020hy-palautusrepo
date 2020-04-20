import React from 'react'
import ReactDOM from 'react-dom'

const Header = () => {
  const course = 'Half Stack application development'
  return (
    <div>
      <p>{course}</p>
    </div>
  )
}

const Content = () => {
  return (
    <div>
      <Part part1='Fundamentals of React' exercises1='10' />
      <Part part2='Using props to pass data' exercises2='7' />
      <Part part3='State of a component' exercises3='14' />
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </div>
  )
}

const Total = () => {
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  return (
    <div>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Header />
      <Content />
      <Total />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root')) 