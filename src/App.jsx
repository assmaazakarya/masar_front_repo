import './App.css'
import Landing from'./componenets/Landing/Landing'
import About from './componenets/About/About'
import Login from './componenets/Login/Login'
import Singup from './componenets/Singup/Singup'
import Notfound from './componenets/Notfound/Notfound'
import Courses from './componenets/Courses/Courses'
import Lessons from './componenets/Lessons/Lessons'
import Contact from './componenets/Contact/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Landing />}/>
    <Route path='/courses' element={<Courses />}/>
    <Route path='/lesson' element={<Lessons />}/>
    <Route path='/singup' element={<Singup />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='*' element={<Notfound />} />
   </Routes>
   </BrowserRouter>
   
    </>
  )
}

export default App
