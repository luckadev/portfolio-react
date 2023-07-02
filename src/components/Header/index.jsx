import React from 'react'
import './header.scss'

const Header = () => {

  function handleOpenMenu() {
    let ulElement = document.getElementById("ul");
    ulElement.classList.toggle("menuActive");

    let icon = document.getElementById('btn-menu');
    icon.classList.toggle("icon-active");

    if(ulElement.classList.contains('menuActive')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    let liElement = document.querySelectorAll('#ul li a')
    liElement.forEach((value) => {
      value.addEventListener('click', () => {
        ulElement.classList.remove('menuActive');
        icon.classList.remove("icon-active");
        document.body.style.overflow = 'auto';
      })
    }) 
  }

  return (
    <header>
      <h4><span>Lucas Ribeiro</span><span className='dot'>.</span></h4>
      <button onClick={handleOpenMenu} id='btn-menu'>Menu <span id='hamb-icon'></span></button>
      <ul id='ul'>
        <li><a href="#home"><span>Home</span></a></li>
        <li><a href="#about"><span>About</span></a></li>
        <li><a href="#work"><span>Work</span></a></li>
      </ul>
    </header>
  )
}

export default Header;