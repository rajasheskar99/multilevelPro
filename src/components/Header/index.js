import {useLocation} from 'react-router-dom'
import './index.css'

function Header() {
   
  const location = useLocation();
  const {pathname}=location
  let clsname
  switch (pathname){
      case '/':
        clsname= 'a'
        break
      case '/plan':
        clsname= 'b'
        break
      case '/add':
        clsname= 'c'
        break
      case '/summury':
        clsname= 'd'
         break
      default:
       
    }
  const A=clsname==='a'
  const B=clsname==='b'
  const C=clsname==='c'
  const D=clsname==='d'
    
  return (
    <div className='head-container'>
      <div className='head-option'>
        <div className={`option  ${A}`} ><p>1</p></div>
        <div>
          <p className='step'>STEP 1</p>
          <h2 className='option-txt'>YOUR INFO</h2>
        </div>
      </div>

      <div className='head-option'>
        <div className={`option  ${B}`}><p>2</p></div>
        <div>
          <p className='step'>STEP 2</p>
          <h2 className='option-txt'>SELECT PLAN</h2>
        </div>
      </div>

      <div className='head-option'>
        <div className={`option  ${C}`}><p>3</p></div>
        <div>
          <p className='step'>STEP 3</p>
          <h2 className='option-txt'>ADD-ONS</h2>
        </div>
      </div>

      <div className='head-option'>
        <div className={`option  ${D}`}><p>4</p></div>
        <div>
          <p className='step'>STEP 4</p>
          <h2 className='option-txt'>SUMMURY</h2>
        </div>
      </div>
    </div>
  )
}

export default Header
