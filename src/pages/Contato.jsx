import React from 'react'

const Contato = () => {
  return (
    <div className='container contato'>
      <h1>Contato<span>.</span></h1>
      <p>Tem alguma ideia? Onde me encontrar?</p>
      <div className='links-contato'>
        <a href="https://www.linkedin.com/in/devlucaspro" title='Linkedin'><i className="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/devlucaspro" title='Github'><i className="fa-brands fa-github"></i></a>
        <a href="https://www.instagram.com/devcodepro" title='Instagram'><i className="fa-brands fa-instagram"></i></a>
      </div>
    </div>
  )
}

export default Contato;