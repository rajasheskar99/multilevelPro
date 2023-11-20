
import {BrowserRouter ,  Route, Routes} from 'react-router-dom'
import PersonalInfo from './components/PersonalInfo'
import SelectPlan from './components/SelectPlan'
import AddOne from './components/AddOne'
import Summury from './components/Summury'
 
import './App.css';

const App=()=> {
  return (   
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<PersonalInfo/>}/>
     <Route path='/plan' element={<SelectPlan/>}/>
     <Route path='/add' element={<AddOne/>}/>
     <Route path='/summury' element={<Summury/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;

 
 
 