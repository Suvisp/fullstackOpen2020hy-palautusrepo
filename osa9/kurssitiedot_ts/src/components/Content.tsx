/* eslint-disable react/jsx-key */
import React from "react"
import { CoursePart } from "../types"
import Part from "./Part"


const Content: React.FC<{ allParts: CoursePart[] }> = ({ allParts }) => {
  return (
    <div>
      {allParts.map((part) => (
        <Part key={part.name} part={part} />
      ))}
    </div>
  )
}

export default Content