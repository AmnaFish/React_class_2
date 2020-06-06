import React from 'react';
import './Hello.css'


function Hello({firstname})  { 
  return <p className='myname'>
      this is a para  named after : {firstname}
  </p> 
}
export default Hello;
