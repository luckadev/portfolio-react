import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'; 
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

  const [dark, setDark] = useState(true);
  const [arrow, setArrow] = useState(faChevronDown);

  function darkMode() {

    let root = document.querySelector(':root');
    
    if(dark) {

      function myFunction_set() {
        root.style.setProperty('--primary', '#F2F2F2');
        root.style.setProperty('--secondary', '#CECECE');
        root.style.setProperty('--white', '#161618');
        root.style.setProperty('--white2', '#212124');
      }
      
      myFunction_set();
      setDark(false);

    } else {
      function myFunction_set() {
        root.style.setProperty('--primary', '#161618');
        root.style.setProperty('--secondary', '#212124');
        root.style.setProperty('--white', '#F2F2F2');
        root.style.setProperty('--white2', '#CECECE');
      }
      
      myFunction_set();
      setDark(true);
    }

  }

  function openMenu() {
    let menu = document.getElementById('menu');
    menu.classList.toggle('menuActive');
    if (menu.className.includes('menuActive')) {

      setArrow(faChevronUp);

      let a = document.querySelectorAll('#menu a');
      a.forEach((item) => {
        item.classList.add('aVisible')
      })
    } else {

      setArrow(faChevronDown);

      let a = document.querySelectorAll('#menu a');
      a.forEach((item) => {
        item.classList.remove('aVisible')
      })
    }

  }

  return (
    <header>
      <Link to='/'>
        <img src="/assets/profile.png" alt="Lucas Ribeiro" />
      </Link>
      <div>
        <button onClick={openMenu} className='btnMenu'>Menu <FontAwesomeIcon icon={arrow} /></button>
        <nav id='menu'>
          <Link to='/sobre'>Sobre <FontAwesomeIcon className='arrowIcon' icon={faArrowRight} /></Link>
          <Link to='/projetos'>Projetos <FontAwesomeIcon className='arrowIcon' icon={faArrowRight} /></Link>
          <Link to='/posts'>Posts <FontAwesomeIcon className='arrowIcon' icon={faArrowRight} /></Link>
          <Link to='/skills'>Skills <FontAwesomeIcon className='arrowIcon' icon={faArrowRight} /></Link>
          <Link to='/contato'>Contato <FontAwesomeIcon className='arrowIcon' icon={faArrowRight} /></Link>
        </nav>
      </div>
      <button onClick={darkMode}><FontAwesomeIcon icon={faMoon} /></button>
    </header>
  )
}

export default Header;