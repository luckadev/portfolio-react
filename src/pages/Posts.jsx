import React, { useEffect } from 'react'

const Posts = () => {

  let posts = [
    {
      capa: '/assets/100.png',
      title: 'Recursos Gratuitos',
      descricao: 'Ferramentas gratuitas para desenvolvedores frontend.'
    },
    {
      capa: '/assets/110.png',
      title: 'Projetos Frontend',
      descricao: 'Melhores projetos frontend para desenvolver e se destacar.'
    },
    {
      capa: '/assets/130.png',
      title: 'Roadmap Frontend',
      descricao: 'Um resumo das tecnologias que um iniciante deve aprender para entrar para o mercado.'
    },
  ]

  useEffect(() => {
    function capaPost() {

      posts.map((item, index) => {
        let div = document.getElementById(index);
        div.style.backgroundImage = `url(${item.capa})`
        div.style.backgroundSize = 'cover'
        div.style.backgroundPosition = 'center'
        div.style.width = '100%'
        div.style.maxWidth = '500px'
        div.style.height = '300px'
        div.style.borderRadius = '8px'
      })
    }

    capaPost()
  }, [])

  return (
    <div className='container'>
      <div className='title-content'>
        <h1>Posts.</h1>
        <p>Conteúdo sobre programação frontend diretamente no Instagram.</p>
      </div>
      {posts.map(((item, index) => {
        return(
          <div key={index} className='container-posts'>
            <div id={index}></div>
            <div className='text-post'>
              <h3>{item.title}</h3>
              <a href='https://www.instagram.com/devcodepro'>Acessar</a>
            </div>
            <p>{item.descricao}</p>
          </div>
        )
      }))}
    </div>
  )
}

export default Posts