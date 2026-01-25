import React, { useState } from "react";
import './Contact.css'
export default function Contacts() {
  // const [name,setName] = useState("")
  // const [email,setEmail] = useState("")
  // const [msg,setMsg] = useState("")
  // const [language,setLanguage] = useState("")
  // const [food,setFood] = useState("")

  const [formData,setFormData] = useState({
    name:'',
    email:'',
    msg:''
  })

  const onChangeInput = (e)=>{
    setFormData({...formData,[e.target.value]:e.target.value})
    console.log(formData)
  }

  const handleSubmission = (e)=>{
    e.preventDefault()

    const formData = {
      name : name,
      email : email,
      msg : msg,
      language : language,
      food : food
    }
console.log(formData)
  }
  return (
    <>
    <br />
    <br />
    <form  className="form" onSubmit={handleSubmission}>
    <div className="form-group">
      <input type="text" placeholder='Enter your name' onChange={onChangeInput} />
    </div>

     <div className="form-group">
      <input type="email" placeholder='Enter your email' onChange={onChangeInput} />
    </div>

     <div className="form-group">
      <textarea  placeholder='Enter your feedback' onChange={onChangeInput} />
    </div>
    
    <div className="form-group">
      <label htmlFor="fav_language_input">Choose your Fav Language</label><br></br>
  <input type="radio" name='fav_language' value="c++" onChange={onChangeInput}/>
  <label htmlFor="c++">C++</label>

   <input type="radio" name='fav_language' value="c" onChange={onChangeInput}/>
  <label htmlFor="c">C</label>

   <input type="radio" name='fav_language' value="js" onChange={onChangeInput} />
  <label htmlFor="js">js</label>
    </div>

    <div className="form-group">

<label htmlFor="Food">Choose your Fav food  </label>
    <select
  id="food"

  onChange={onChangeInput}
>
  <option value="momo">MOMO</option>
  <option value="coke">Coke</option>
  <option value="burgers">Burgers</option>
</select>

    </div>

   <button className='btn' type='submit'>Submit</button>
    </form>
  </>
  )
}