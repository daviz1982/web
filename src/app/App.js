import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

import './App.scss'

export default function App() {
  return (
    <main className="main">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </main>
  )
}
