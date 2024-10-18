import React from 'react'
import Navbar from './components/Navbar'
import './index.css'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='overflow-x-hidden font-Outfit leading-8
     dark:bg-darkTheme dark:text-white'>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App