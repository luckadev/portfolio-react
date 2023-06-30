import React from 'react'
import "./home.scss";

const Home = () => {

  return (
    <main id='home'>
      <h1 className='hidden'>Hey, I'm Lucas Ribeiro, I'm a <span>frontend developer</span> and <span>UI designer</span> turning ideas into success<span className='dot'>.</span></h1>
      <a href="#about"><i className="fa-solid fa-chevron-down"></i></a>
    </main>
  )
}

export default Home;