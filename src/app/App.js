import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import About from './components/Main/components/About'
import Projects from './components/Main/components/Projects'
import Curriculum from './components/Main/components/Curriculum'
import Contact from './components/Main/components/Contact'

import './App.scss'

export default function App() {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  )
}
