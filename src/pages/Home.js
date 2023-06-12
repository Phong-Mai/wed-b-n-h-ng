import React from 'react'
import Body from '../components/Body'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Home() {
  return (
    <div className='bg-danger'>
    <div className='container bg-light '>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
    </div>
  )
}

export default Home
