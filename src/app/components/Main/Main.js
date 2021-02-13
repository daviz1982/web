import React from 'react'

import About from './components/About'
import Pro from './components/Pro'
import Curriculum from './components/Curriculum'
import Contact from './components/Contact'

import './Main.scss'

export default function Main() {
  return (
    <article className='main--article'>
      <About></About>
      <Pro></Pro>
      <Curriculum></Curriculum>
      <Contact></Contact>
    </article>
  )
}
