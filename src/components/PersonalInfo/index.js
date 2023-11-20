import React from 'react'
import {Link} from 'react-router-dom'
import  Header from '../Header'
import './index.css'

const PersonalInfo = () => {
  return (
    <div className='personal-bg'>
      <div className='card'>
      <Header/>
      <div className='right-sec'>
        <h2 className='card-head'>Personal info</h2>
        <p className='caption'>Please provide your name ,email address and phone number.</p>
        <label htmlFor='name' className='lable'>Name</label>
         <div><input type='text' className='input'  placeholder='e.g .Stephen king'/></div>
        <label htmlFor='name' className='lable'  >Email Address</label>
        <div><input type='text' className='input'  placeholder='e.g .stephenking@gmail.com' /></div> 
        <label htmlFor='name' className='lable'>Phone Number</label>
         <div><input type='text' className='input' placeholder='e.g .+1234567890'/></div>
         <Link to='/plan'><div className='btn-sec'>  <button type='button' className='btn b'>Next step</button>  </div></Link>
      </div>
      </div>       
    </div>
  )
}

export default PersonalInfo
