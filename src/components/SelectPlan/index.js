import React from 'react'
import {Link} from 'react-router-dom'
import {GiSnowman} from 'react-icons/gi'
import {CgGames} from 'react-icons/cg'
import  Header from '../Header'
import './index.css'
 

const SelectPlan = () => {
   
  return (
    <div className='personal-bg'>
      <div className='card'>
      <Header/>
      <div className='right-sec'>
        <h2 className='card-head'>Select your plan</h2>
        <p className='caption'>You have the options of monthly or yearly billing.</p>
         <div className='plans-sec'>
            <div className='plan-card'>
                <div className='icon-card'><GiSnowman className='icon'/></div>
                <h3 className='icon-head'>Arcade</h3>
                <p className='money'>$9/mo</p>
            </div>

            <div className='plan-card  '>
                <div className='icon-card card2'><CgGames className='icon'/></div>
                <h3 className='icon-head'>Advance</h3>
                <p className='money'>$12/mo</p>
            </div>

            <div className='plan-card  '>
                <div className='icon-card card3'><GiSnowman className='icon'/></div>
                <h3 className='icon-head'>Pro</h3>
                <p className='money'>$15/mo</p>
            </div>
         </div>
         <div className='m-or-y'>
          <p className='slider-text'>Monthly</p>
          <label class="switch">
            <input type="checkbox"  />
            <span class="slider round"></span>
            </label>
            <p className='slider-text'>Yearly</p>

         </div>
         <div className='btn-sec'>
         <Link to='/'> <button type='button' className='btn-back'> Go Back</button></Link>
          <Link to='/add'>  <button type='button' className='btn'>Next step</button></Link>  </div>
      </div>
      </div>       
    </div>
  )
}

export default SelectPlan
