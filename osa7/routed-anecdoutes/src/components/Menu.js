import React from 'react'
import { Link } from "react-router-dom"


const Menu = () => {
    const padding = {
      paddingRight: 5
    }
    return (
      <div>
        <a href='/' style={padding}>anecdotes</a>
        <a href='/createnew' style={padding}>create new</a>        
        {/* <Link to='/createnew' style={padding}>create new</Link> */}
        <a href='/about' style={padding}>about</a>
      </div>
    )
  }

  export default Menu