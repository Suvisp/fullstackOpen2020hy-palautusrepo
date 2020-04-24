import React from 'react';


const Part = (props) => {
  // console.log('part props value is', props)

  return (
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>
  )
}

export default Part;
