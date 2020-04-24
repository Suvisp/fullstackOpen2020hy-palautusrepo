import React from 'react';
import Part from './Part'
import Total from './Total'

const Content = (props) => {
    //  console.log('props value is', props)
    
     const parts = props.course.parts.map(part =>
      <Part id={part.id} key={part.id} name={part.name} exercises={part.exercises} />
  )
  return (
    <div>
        {parts}
      <Total parts={props.course.parts} />
    </div>
  )
}

export default Content;
