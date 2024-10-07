import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Project from './components/Project'
import { useState } from 'react'
function App() {
  
  return (
    <>
    <Router>
       <Routes>
         <Route path='/project' element={<Project/>}/>
        
         <Route path='/' element={<Login/>}/>
         <Route path='/home'/>
         <Route path='/user' element={<Register/>}/>
       </Routes>
     </Router>
    
    </>
  )
}

export default App
