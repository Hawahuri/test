import React from 'react'
import './Button.css'
export default function CustomButton({type}) {
  return (
    <div>
      <button className={type=='primary'?'primary':'outline'} >Button</button>
    </div>
  )
}
