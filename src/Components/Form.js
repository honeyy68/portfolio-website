import React from 'react';
import "./FormStyle.css";

const Form = () => {
  return (
    <div className='form'>
        <form>
            <label>Your Name</label>
            <input type='text'/>

            <label>Email</label>
            <input type='email'/>

            <label>Subject</label>
            <input type='text'/>

            <label>Message</label>
            <textarea  rows="6" placeholder='Type Your Message here'/>

            <button className='PrimryBtn'>Submit</button>

        </form>
    </div>
  )
}

export default Form