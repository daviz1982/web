import React from 'react'

import About from './components/About'
import Projects from './components/Projects'
import Curriculum from './components/Curriculum'
import Contact from './components/Contact'

export default function Main() {
  return (
    <article className='main--article'>
      <About></About>
      <Projects></Projects>
      <Curriculum></Curriculum>
      <Contact></Contact>
    </article>
  )
}
