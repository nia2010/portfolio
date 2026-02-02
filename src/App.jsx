import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Skills from './components/skills/Skills'
import Experience from './components/experience/Experience'
import About from './components/aboutme/About'
import Project from './components/projects/Project'


function App() {
  

  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <About />
      <Project />
     
      
    </>
  )
}

export default App
