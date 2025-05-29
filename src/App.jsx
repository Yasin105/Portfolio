import { Route,Routes } from 'react-router-dom';
import './App.css'
import Portfolio from './components/Portfolio'
import Navb from './components/Navb'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Project from './components/Project';
import Resume from './components/Resume';
import ProjectDetail from './components/ProjectDetail'


function App() {

  return (
   <>
    <Navb/>
    <Routes>
      <Route path="/" element={<Portfolio/>}/>
      <Route path="/Contact" element={<Contact/>}/> 
      <Route path="/Skills" element={<Skills/>}/>
      <Route path="/Experience" element={<Experience/>}/>
      <Route path="/Projects" element={<Project/>}/>
      <Route path="/Resume" element={<Resume/>}/>
      <Route path="/Projects/:id" element={<ProjectDetail />} />
    </Routes>
    

    <footer className='text-center mt-1'>
      <p>Made with <i className="bi bi-heart-fill"></i> by Muhammad Yasin</p>
      <p>All rights reserved &copy; 2025</p>
      <p>Follow me on <a href="https://www.linkedin.com/in/muhammad-yasin-abb40b203" target="_blank">LinkedIn</a> | <a href="https://github.com/Yasin105">Github</a>
      </p>
      </footer> 
   </> 
  )
}

export default App
