  
import React from 'react'
import { useDispatch } from 'react-redux'
import { filter } from '../actions/filterAction'

const Filter = () => {
  const dispatch = useDispatch()

  const handleChange = (event) => {
      event.preventDefault()
      dispatch(filter(event.target.value))
  }

  return (
    <div>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter