import React, { useEffect } from 'react'

const Projetos = () => {

  let projetos = [
    {
      titulo: 'Check ToDo',
      site: '',
      repositorio: '',
      capa: '/assets/checktodo.png',
      id: 'one'
    },
    {
      titulo: 'Prime flick',
      site: '',
      repositorio: '',
      capa: '',
      id: 'two'
    },
    {
      titulo: 'Dev Front',
      site: '',
      repositorio: '',
      capa: '',
      id: 'three'
    },
  ]

  return (
    <div className='container container-col'>
      <div className='title-content'>
        <h1>Projetos que desenvolvi.</h1>
        <p>Websites, Aplicações web, SPA's, Sistemas interessantes.</p>
      </div>

      <div className='projects-div'>
        {projetos.map((item, index) => {
          return(
            <div key={index} className='project' id={item.id}>
              <h1>{item.titulo}</h1>
              <div>
                <a href="#" className='btn-ver'>Ver</a>
                <a href="#" className='btn-repo'>Repositório</a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projetos;