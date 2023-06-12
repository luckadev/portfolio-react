import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'; 

const Footer = () => {

  useEffect(() => {
    toTop()
  }, [])

  function toTop() {
    let aElement = document.querySelectorAll('footer ul li');
    aElement.forEach(item => {
      item.addEventListener("click", () => {
        window.scrollTo(0, 0);
      })
    })
  }

  return (
    <footer>
        <ul>
          <li><Link to='/'>Inicio</Link></li>
          <li><Link to='/sobre'>Sobre</Link></li>
          <li><Link to='/projetos'>Projetos</Link></li>
          <li><Link to='/posts'>Posts</Link></li>
          <li><Link to='/skills'>Skills</Link></li>
          <li><Link to='/contato'>Contato</Link></li>
        </ul>
        <p>&copy; Lucas Ribeiro. Todos os direitos reservados.</p>
    </footer>
  )
}

export default Footer;