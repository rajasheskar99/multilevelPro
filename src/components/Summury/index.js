import React from 'react'
import { Link } from 'react-router-dom'
import  Header from '../Header'
import './index.css'

const Summury = () => {
  return (
    <div className='personal-bg'>
      <div className='card'>
      <Header/>
      <div className='right-sec'>
        <h2 className='card-head'>Finishing up</h2>
        <p className='caption'>Double-check everything looks OK before confirming.</p>

        <div className='add-ons-bg1'>
           <div className='finish-card'>
           <div>
             <h2 className='check-head'> Arcade(Monthly)</h2>
            <a href='#raw'>Change</a>
             </div>           
             <p className='k-money'>+$9/mo</p> 

              
           </div>
           <hr className='line'/>
           <div className='finish-card'>
                <p className='fin-dec'>Online service</p>
                <p className='fin-money'>+$9/mo</p> 
             </div>
             <div className='finish-card'>
                <p className='fin-dec'>Online service</p>
                <p className='fin-money'>+$9/mo</p> 
             </div>           
                      
          </div> 
          <div className='finish-card'>
                <p className='fin-dec'>Total(per month)</p>
                <p className='fin-money1'>+$12/mo</p> 
             </div> 

           
         <div className='btn-sec'>
        <Link to='/add'> <button type='button' className='btn-back3'> Go Back</button></Link>
            <button type='button' className='btn4'>Confirm</button></div>
      </div>
      </div>       
    </div>
  )
}

export default Summury
