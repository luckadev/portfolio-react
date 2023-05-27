import React, { useEffect } from 'react'

const Projetos = () => {

  let projetos = [
    {
      titulo: 'React Dashboard',
      site: 'https://dashboard-devlucas.netlify.app/',
      repositorio: 'https://github.com/devlucaspro/dashboard-react',
      color: 'var(--color1)',
      icon: 'fa-solid fa-paperclip fa-xs',
      description: 'Dashboard feito com React.JS e Firebase',
    },
    {
      titulo: 'React To Do',
      site: 'https://todo-react-lucasdeveloper.netlify.app/',
      repositorio: 'https://github.com/devlucaspro/toDoList-React',
      color: 'var(--color1)',
      icon: 'fa-solid fa-pen-to-square fa-xs',
      description: 'Uma aplicação de tarefas(to Do list)',
    },
    {
      titulo: 'Prime flick',
      site: 'https://primeflick.netlify.app/',
      repositorio: 'https://github.com/devlucaspro/primeflick',
      color: 'var(--color2)',
      icon: 'fa-brands fa-readme fa-xs',
      description: 'Plataforma de filmes com React.JS e Router',
    },
    {
      titulo: 'Dev Front',
      site: 'https://devfrontchallenges.netlify.app/',
      repositorio: 'https://github.com/devlucaspro/devfrontchallenges',
      color: 'var(--color3)',
      icon: 'fa-solid fa-code fa-xs',
      description: 'Plataforma de desafios Frontend',
    },
    {
      titulo: 'Learn Talkioo',
      site: 'https://talkioo.vercel.app/',
      repositorio: 'https://github.com/devlucaspro/talkioo',
      color: 'var(--color4)',
      icon: 'fa-solid fa-book fa-xs',
      description: 'Aprenda Inglês com a Talkioo, muitos desafios',
    },
  ]

  useEffect(() => {
    function capa() {
      projetos.map((item, index) => {
        let div = document.getElementById(index)
        div.style.backgroundColor = item.color
      })
    }
  
    capa()
  }, [])

  

  return (
    <div className='container container-col'>
      <div className='title-content'>
        <h1>Projetos que desenvolvi<span>.</span></h1>
        <p>Websites, Aplicações web, SPA's, Sistemas interessantes.</p>
      </div>

      <div className='projects-div gap'>
        {projetos.map((item, index) => {
          return(
            <div key={index} className='project' id={index}>
              <h1><i className={item.icon}></i> {item.titulo}</h1>
              <p>{item.description}</p>
              <div>
                <a href={item.site} target='blank' className='btn-ver'>Ver</a>
                <a href={item.repositorio} target='blank' className='btn-repo'>Repositório</a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projetos;