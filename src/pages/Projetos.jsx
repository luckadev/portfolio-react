import React, { useEffect } from 'react'

const Projetos = () => {

  let projetos = [
    {
      titulo: 'Check ToDo',
      site: 'https://checktododevlucas.netlify.app/',
      repositorio: 'https://github.com/devlucaspro/checkToDo',
      capa: '/assets/checktodo.png',
      color: 'var(--color1)',
    },
    {
      titulo: 'Prime flick',
      site: 'https://primeflick.netlify.app/',
      repositorio: 'https://github.com/devlucaspro/primeflick',
      capa: '/assets/primeflick.png',
      color: 'var(--color2)',
    },
    {
      titulo: 'Dev Front',
      site: 'https://devfrontchallenges.netlify.app/',
      repositorio: 'https://github.com/devlucaspro/devfrontchallenges',
      capa: '/assets/devfront.png',
      color: 'var(--color3)',
    },
    {
      titulo: 'Card Details',
      site: 'https://carddetails-devfrontchallenges.vercel.app/',
      repositorio: 'https://github.com/devlucaspro/card-details-devfront',
      capa: '/assets/cardDetails.png',
      color: 'var(--color4)',
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

      <div className='projects-div'>
        {projetos.map((item, index) => {
          return(
            <div key={index} className='project' id={index}>
              <h1><i className="fa-solid fa-code fa-xs"></i> {item.titulo}</h1>
              <div>
                <a href={item.site} className='btn-ver'>Ver</a>
                <a href={item.repositorio} className='btn-repo'>Repositório</a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projetos;