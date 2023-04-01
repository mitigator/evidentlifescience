import React from 'react'
import emailjs from "emailjs-com"
import { toast } from 'react-hot-toast';


const Subscribe = () => {

  function sendEmail(e){
    e.preventDefault();
    toast.success("Subscribed");
    
    emailjs.sendForm(
      'service_b7u3x8h',
       'template_q6nsu7d',
        e.target,
         'YVz5ZIO5JYw53pOlY').then(res=>{
          console.log(res);
         }).catch(err=> console.log(err));
  }
  return (
    <div>
        <h1 className=' font-bold text-center lg:text-4xl md:text-2xl text-lg mx-auto py-2 2xl:text-6xl 2xl:py-5 '>STAY IN THE LOOP</h1>
        <p className=' text-sm md:text-lg text-center mx-auto py-0 2xl:text-3xl lg:text-xl '>Promotions, New Products & Sales Directly to Your E-Mail</p>
        <form className="flex flex-col md:flex-row gap-0 justify-center py-8 my-2 " onSubmit={sendEmail}>
            <input size="65"  type="email" name="user_email" placeholder='Enter your mail' className='border-2 border-solid	 md:border-black ' />
            <button className=' md:bg-richblack-800 bg-richblack-700 text-white px-3 '>Subscribe</button>
        </form>


    </div>
  )
}

export default Subscribe