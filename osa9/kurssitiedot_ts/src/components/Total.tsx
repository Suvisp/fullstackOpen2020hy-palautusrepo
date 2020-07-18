import React from "react"
import { CoursePart } from "../types"


const Total: React.FC<{ allParts: CoursePart[] }> = ({ allParts }) => {
  return (
    <p>
      Number of exercises{" "}
      {allParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
    </p>
  )
}

export default Total