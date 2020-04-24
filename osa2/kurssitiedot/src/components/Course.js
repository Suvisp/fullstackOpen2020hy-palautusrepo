import React from 'react';
import Header from './Header'
import Content from './Content'


const Course = (props) => {
  // console.log('props value is', props)

  return (
    <div>
        <Header header={props.course.name}/>
        <Content course={props.course} />
    </div>
  )
}

export default Course;
