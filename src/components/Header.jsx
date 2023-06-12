import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faChevronUp, faChevronDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

  const [dark, setDark] = useState(true);
  const [arrow, setArrow] = useState(faChevronDown);

  useEffect(() => {
    toTop()
  }, [])

  function toTop() {
    let aElement = document.querySelectorAll('nav a');
    aElement.forEach(item => {
      item.addEventListener("click", () => {
        window.scrollTo(0, 0);
      })
    })

    let logo = document.getElementById('logo');
    logo.addEventListener('click', () => {
      window.scrollTo(0, 0);
    })
  }


  function darkMode() {

    let root = document.querySelector(':root');
    
    if(dark) {

      function myFunction_set() {
        root.style.setProperty('--primary', '#F2F2F2');
        root.style.setProperty('--secondary', '#f8f8f8');
        root.style.setProperty('--white', '#161618');
        root.style.setProperty('--white2', '#212124');
        root.style.setProperty('--color1', '#e6a835');
      }
      
      myFunction_set();
      setDark(false);

    } else {
      function myFunction_set() {
        root.style.setProperty('--primary', '#161618');
        root.style.setProperty('--secondary', '#212124');
        root.style.setProperty('--white', '#F2F2F2');
        root.style.setProperty('--white2', '#CECECE');
        root.style.setProperty('--color1', '#30C7E9');
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

      let menuItems = document.getElementsByClassName('aVisible')
      for(let item of menuItems) {
        item.addEventListener('click', () => {

          menu.classList.remove('menuActive');

          let a = document.querySelectorAll('#menu a');
          a.forEach((item) => {
            item.classList.remove('aVisible')
          })

          setArrow(faChevronDown);
          window.scrollTo(0, 0);
        })
      }
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
      <Link to='/' id='logo'>
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
      <button onClick={darkMode}><FontAwesomeIcon icon={dark ? faMoon : faSun} /></button>
    </header>
  )
}

export default Header;