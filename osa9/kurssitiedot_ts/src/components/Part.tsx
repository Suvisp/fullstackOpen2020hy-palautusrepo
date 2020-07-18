import React from "react"
import { CoursePart } from "../types"
import { assertNever } from "../utils"

const Part: React.FC<{ part: CoursePart }> = ({ part }) => {
    switch (part.name) {
        case "Fundamentals":
            return (
                <p>
                    {part.name}
                    {part.description && (
                        <div>
                            Description: {part.description}
                        </div>
                    )}
          Exercises: {part.exerciseCount}
                </p>
            )
        case "Using props to pass data":
            return (
                <p>
                    {part.name}
                    <br />
          Projects: {part.groupProjectCount}
                    <br />
          Exercises: {part.exerciseCount}
                </p>
            )
        case "Deeper type usage":
            return (
                <p>
                    {part.name}
                    <br />
                    {part.description && (
                        <div>
                            Description: {part.description}
                            <br />
                        </div>
                    )}
          Exercises: {part.exerciseCount}
                    <br />
            Submission:{" "}
                    <a href={part.exerciseSubmissionLink}>
                        {part.exerciseSubmissionLink}
                    </a>
                </p>
            )
        case "This is my own course part interface":
            return (
                <p>
                    {part.name} <br />
          Description: {part.description}
                    <br />
          Exercises: {part.exerciseCount}
                    <br />
                </p>
            )
        default:
            return assertNever(part)
    }
}

export default Part