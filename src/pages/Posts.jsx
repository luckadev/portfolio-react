import React, { useEffect } from 'react'
import Title from '../components/Title'

const Posts = () => {

  let posts = [
    {
      capa: '/assets/corte1.png',
      title: 'Portfólio de sucesso',
      descricao: 'Descubra algumas dicas que podem alavancar seu portfólio e ajudar você a crescer.'
    },
    {
      capa: '/assets/postdev2.png',
      title: 'Dicas de Projeto',
      descricao: 'Melhore seus projetos aplicando essas 3 dicas importantes que eu falo nesse post incrível.'
    },
    {
      capa: '/assets/100.png',
      title: 'Recursos gratuitos',
      descricao: 'Ferramentas gratuitas para desenvolvedores frontend/web.'
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
        div.style.border = '1px solid var(--third)'
      })
    }

    capaPost()
  }, [])

  return (
    <div className='container'>
      <Title h1children={"Posts"} pchildren={"Conteúdo sobre programação frontend diretamente no Instagram"} />
      
      {posts.map(((item, index) => {
        return(
          <div key={index} className='container-posts'>
            <div id={index}></div>
            <div className='text-post'>
              <h3>{item.title}</h3>
              <a href='https://www.instagram.com/devcodepro' target='blank'>Acessar</a>
            </div>
            <p>{item.descricao}</p>
          </div>
        )
      }))}
    </div>
  )
}

export default Posts;