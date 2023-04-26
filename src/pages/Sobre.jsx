import React from 'react'

const Sobre = () => {
  return (
    <div className='container container-sobre'>
      <div className='text-left'>
        <h1>Olá! Meu nome é Lucas Ribeiro e eu sou...</h1>
        <p>
          programador, ou como a maioria gosta de chamar, Desenvolvedor Frontend, tenho 18 anos, nasci em Piracicaba que fica localizado no interior de São Paulo.
        </p>
        <p>
          Desde de criança sempre gostei da área de TI e de mexer em computadores, depois dos 16 anos comecei a me interessar sobre o mundo da programação e então virou minha paixão.
        </p>
        <p>
          No meu dia a dia eu geralmente desenvolvo as minhas aplicações utilizando as seguintes ferramentas: Javascript, React.JS, Styled Components ou CSS padrão.
        </p>
        <p>
          Eu sou o tipo de pessoa que sempre precisa estar aprendendo algo novo diariamente, se não meu dia não está feito, ultimamente estou estudando Next.JS.
        </p>
        <p>
          Compartilho dicas e conhecimentos sobre a área de programação frontend no meu Instagram - @Devcodepro.
        </p>
      </div>
      <div className='photo-right'>
        <img src="/assets/myPhoto.png" alt="Lucas ribeiro" />
        <ul>
          <li><a href="">Veja meus projetos no Github.</a></li>
          <li><a href="">Conheça meu Instagram.</a></li>
          <li><a href="">Visite meu LinkedIn.</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Sobre;