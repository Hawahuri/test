import {useForm} from 'react-hook-form'
export default function Contacts() {
  const {register,handleSubmit,formState:{errors},reset,
} = useForm();

const onSubmit = (data) => {
    console.log("form data : ",data);
    reset();
};
  console.log("form errors",errors);
  
  return (
    <>
    <br />
    <br />
    <form  className="form" onSubmit={handleSubmit(onSubmit)}>
    <div className="form-group">
     
      <input type="text" placeholder='Enter your name' {...register("name",{required:"name  is required",})} />
   {errors.name && <p style={{color:"red"}}>{errors.name.message}</p>}
    </div>

     <div className="form-group">
      <input type="email" placeholder='Enter your email'  {...register("email",{required:"email  is required",})} />
   {errors.email && <p style={{color:"red"}}>{errors.email.message}</p>}
   
    </div>

     <div className="form-group">
      <textarea  placeholder='Enter your feedback'  {...register("message",{required:"message  is required",})} />
   {errors.message && <p style={{color:"red"}}>{errors.message.message}</p>}
  
    </div>
    
    <div className="form-group">
      <label htmlFor="fav_language_input">Choose your Fav Language</label><br></br>
  <input type="radio" name='fav_language' value="c++"/>
  <label htmlFor="c++">C++</label>

   <input type="radio" name='fav_language' value="c"/>
  <label htmlFor="c">C</label>

   <input type="radio" name='fav_language' value="js" />
  <label htmlFor="js">js</label>
    </div>

    <div className="form-group">

<label htmlFor="Food">Choose your Fav food  </label>
    <select
  id="food"

 
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