import React from 'react'
import {Link} from 'react-router-dom'
import  Header from '../Header'
import './index.css'
 

const AddOne = () => {
  return (
    <div className='personal-bg'>
      <div className='card'>
      <Header/>
      <div className='right-sec'>
        <h2 className='card-head'>Pick add-ons</h2>
        <p className='caption'>Add-ons help enhance your gamimg experience.</p>

        <div className='add-ons-bg'>
          <div className='ch'><input type='checkbox' className='check-inpt'/></div>
          <div>
            <h2 className='check-head'> Larger storage</h2>
            <p className='check-desc'>Extra 1TB of cloud save</p>
            </div>
            <p className='check-money'>+$2/mo</p>          
          </div> 

          <div className='add-ons-bg'>
          <div className='ch'><input type='checkbox' className='check-inpt'/></div>
          <div>
            <h2 className='check-head'>Customizable Profile</h2>
            <p className='check-desc'> Custom theme on your profile</p>
            </div>
            <p className='check-money'>+$2/mo</p>          
          </div>  

          <div className='add-ons-bg'>
          <div className='ch'><input type='checkbox' className='check-inpt'/></div>
          <div>
            <h2 className='check-head'>Online service</h2>
            <p className='check-desc'>Access to multiplayer games</p>
            </div>
            <p className='check-money'>+$1/mo</p>          
          </div>   
        
         <div className='btn-sec'>
         <Link to='/plan'> <button type='button' className='btn-back3'> Go Back</button></Link>
         <Link to='/summury'><button type='button' className='btn3'>Next step</button></Link> </div>
      </div>
      </div>       
    </div>
  )
}

export default AddOne
