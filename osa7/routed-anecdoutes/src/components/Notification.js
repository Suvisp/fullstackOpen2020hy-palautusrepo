import React from 'react'

const Notification = ({ notification }) => {
    if (notification === '') {
      return ''
    }
  
    return (
      <div className="notification">
        {notification}
      </div>
    )
  }

  export default Notification