import React from 'react'

export default function Card({ children }) {
  return (
      <div className="grandparent">
            <h1>To-do-list</h1>
            <div className="parent">
            {children}
            </div>
        </div>
  )
}


    