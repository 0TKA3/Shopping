import { useState } from 'react'
import './assets/style.scss'
import Navbar from './assets/components/Navbar'
import Main from './assets/components/Main'




function App() {

  return (
    <>
      <div className="container">
        <Navbar></Navbar>
        <Main></Main>
      </div>
    </>
  )
}

export default App
