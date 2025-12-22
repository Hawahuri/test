import React, { useState } from "react";
import './Contact.css'
export default function Contacts() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")


  const handleSubmission = (e)=>{
    e.preventDefault();
    const formData = {
      name : name,
      email : email,
      message : message
    };
    console.log("Form Data Submitted : ",formData)
  }
  return (
    <form className="form" onSubmit={handleSubmission}>

      <div className="form-group">
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" onChange={(e)=>setName(e.target.value)}/>
      </div>

      <div className="form-group">
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)}/>
      </div>

      <div className="form-group">
        <label htmlFor="message">Message: </label>
        <textarea name="message" rows="5" onChange={(e)=>setMessage(e.target.value)}></textarea>
        <button type="submit">Send</button>
      </div>

    </form>
  );
}
