import React from 'react'
import { Link } from 'react-router-dom'; 

const Footer = () => {
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