import React from 'react';

interface Header{
    name: string;
  }
  

const Header = (props: Header) => {
  
  return (
    <div>
      <h2>{props.name}</h2>
    </div>
  )
}

export default Header;
