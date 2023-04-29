import React from 'react'

const Sobre = () => {
  return (
    <div className='container container-sobre'>
      <div className='text-left'>
        <h1>Olá! Meu nome é Lucas Ribeiro...</h1>
        <p>
          e sou programador, ou como a maioria gosta de chamar, desenvolvedor frontend, tenho 18 anos, nasci em Piracicaba, localizado no interior de São Paulo.
        </p>
        <p>
          Desde de criança sempre gostei da área de TI e de mexer em computadores, depois dos 16 anos comecei a me interessar sobre o mundo da programação e então virou minha paixão.
        </p>
        <p>
          No meu dia a dia eu geralmente desenvolvo as minhas aplicações utilizando as seguintes ferramentas: Javascript, React.JS, Styled Components.
        </p>
        <p>
          Eu sempre estou aprendendo algo novo, ultimamente estou estudando Next.JS, para mais detalhes das minhas Habilidades Técnicas, acesse a sessão <strong>Skills</strong>.
        </p>
        <p>
          Compartilho dicas e conhecimentos sobre a área de programação frontend no meu Instagram - @Devcodepro.
        </p>
      </div>
      <div className='photo-right'>
        <img src="/assets/myPhoto.png" alt="Lucas ribeiro" />
        <ul>
          <li><a href="https://github.com/devlucaspro"><i className="fa-brands fa-github"></i> Meus projetos no Github.</a></li>
          <li><a href="https://www.instagram.com/devcodepro"><i className="fa-brands fa-instagram"></i> Conheça meu Instagram.</a></li>
          <li><a href="https://www.linkedin.com/in/devlucaspro"><i className="fa-brands fa-linkedin"></i> Visite meu LinkedIn.</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Sobre;